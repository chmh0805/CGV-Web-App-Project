package com.cgv.cgvserver.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.api.MovieApiClient;
import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.director.Director;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovie;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovieRepository;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.stillcut.StillCut;
import com.cgv.cgvserver.domain.trailer.Trailer;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.utils.movie.ActorUtils;
import com.cgv.cgvserver.utils.movie.BoxOfficeUtils;
import com.cgv.cgvserver.utils.movie.DirectorUtils;
import com.cgv.cgvserver.utils.movie.StillCutUtils;
import com.cgv.cgvserver.utils.movie.TrailerUtils;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieDetailApiRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieReqDto;
import com.cgv.cgvserver.web.dto.movie.TrailerRespDto;
import com.cgv.cgvserver.web.dto.movie.moviefinder.MovieFinderOfficeApiDto;
import com.cgv.cgvserver.web.dto.movie.moviefinder.MovieFinderRespDto;
import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MovieService {
	private final MovieApiClient movieApiClient;
	private final MovieRepository movieRepository;
	private final BoxOfficeMovieRepository boxOfficeMovieRepository;
	private final EntityManager entityManager;
	private static final Logger log = LoggerFactory.getLogger(MovieService.class);

	
	@Transactional(readOnly = true)
	public List<MovieDetailApiRespDto> findByBoxOfficeDate(String date) throws IOException {
		return movieApiClient.findByBoxOfficeDate(date);
	}
	@Transactional(readOnly = true)
	public List<String> 트레일러리스트(String movieId) {
		Query query = entityManager.createNativeQuery("SELECT thumbImageUrl FROM trailer WHERE movieId = ?")
			.setParameter(1, movieId);
		@SuppressWarnings("unchecked")
		List<String> thumbImageUrl = query.getResultList();
		return thumbImageUrl;
	}
	@Transactional(readOnly = true)
	public TrailerRespDto 트레일러(Long trailerId) {
		Query query = entityManager.createNativeQuery("SELECT trailerUrl FROM trailer WHERE id = ?")
				.setParameter(1, trailerId);
		JpaResultMapper result = new JpaResultMapper();
		TrailerRespDto trailerRespDto = result.uniqueResult(query, TrailerRespDto.class);
		return trailerRespDto;
	}
	
	@Transactional(readOnly = true)
	public List<String> 스틸컷리스트(String movieId) {
		Query query = entityManager.createNativeQuery("SELECT imageUrl FROM stillcut WHERE movieId = ?")
			.setParameter(3, movieId);
		@SuppressWarnings("unchecked")
		List<String> stillCutImageUrl = query.getResultList();
		return stillCutImageUrl;
	}
	
	@Transactional(readOnly = true)
	public List<MovieBoxOfficeRespDto> 박스오피스영화리스트() {
		StringBuffer sb = new StringBuffer();
		sb.append("SELECT rankNum, docId, posterImgSrc, title, releaseDate ");
		sb.append("FROM boxofficemovie AS bm inner join movie AS m ");
		sb.append("WHERE bm.movieId = m.docId order by rankNum ASC ");
		
		Query query = entityManager.createNativeQuery(sb.toString());
		
		JpaResultMapper result = new JpaResultMapper();
		List<MovieBoxOfficeRespDto> movieBoxOfficeRespDtos = result.list(query, MovieBoxOfficeRespDto.class);
		return movieBoxOfficeRespDtos;
	}
	@Transactional(readOnly = true)
	public List<Movie> 영화모두찾기() {
		return movieRepository.findAll();
	}
	@Transactional(readOnly = true)
	public Movie 영화상세보기(String movieId) {
		Movie movie = movieRepository.findById(movieId).orElseThrow(() -> {throw new NotFoundMovieException();});
		return movie;
	}
	@Transactional
	public void 저장하기(MovieReqDto movieReqDto) {
		Movie movie = movieReqDto.toEntity();
		
		Movie movieEntity = movieRepository.save(movie);
		
		List<Director> directors = DirectorUtils.parsingToActorObject(movieReqDto.getDirectors(), movieEntity);
		List<Actor> actors = ActorUtils.parsingToActorObject(movieReqDto.getActors(), movieEntity);
		List<Trailer> trailers = TrailerUtils.parsingToTrailerObject(movieReqDto.getTrailerUrls(), movieReqDto.getThumbImageUrls(), movieEntity);
		List<StillCut> stillCuts = StillCutUtils.parsingToActorObject(movieReqDto.getStillCutImgSrc(), movieEntity);
		
		for (int i = 0; i < directors.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO director (name, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM director WHERE name = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, directors.get(i).getName())
				.setParameter(2, directors.get(i).getMovie())
				.setParameter(3, directors.get(i).getName())
				.setParameter(4, directors.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < actors.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO actor (name, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM actor WHERE name = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, actors.get(i).getName())
				.setParameter(2, actors.get(i).getMovie())
				.setParameter(3, actors.get(i).getName())
				.setParameter(4, actors.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < trailers.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO trailer (trailerUrl, movieId, thumbImageUrl) ");
			sb.append("SELECT ?, ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM trailer WHERE trailerUrl = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, trailers.get(i).getTrailerUrl())
				.setParameter(2, trailers.get(i).getMovie())
				.setParameter(3, trailers.get(i).getThumbImageUrl())
				.setParameter(4, trailers.get(i).getTrailerUrl())
				.setParameter(5, trailers.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < stillCuts.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO stillcut (imageUrl, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM stillcut WHERE imageUrl = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, stillCuts.get(i).getImageUrl())
				.setParameter(2, stillCuts.get(i).getMovie())
				.setParameter(3, stillCuts.get(i).getImageUrl())
				.setParameter(4, stillCuts.get(i).getMovie())
				.executeUpdate();
		}
		
		BoxOfficeMovie boxOfficeMovie = BoxOfficeUtils.boxOfficeMovieObject(movieReqDto.getRank(), movieEntity);
		boxOfficeMovieRepository.save(boxOfficeMovie);
	}
	@Transactional(readOnly = true)
	public List<MovieFinderRespDto> 무비파인더검색(int sort, String keyword, List<String> countryNm, String startYear, String endYear) throws IOException {
		List<MovieFinderRespDto> dtos = new ArrayList<>(); // 결과값 담을 그릇
		BufferedReader reader;
		StringBuffer sb = new StringBuffer();
		StringBuffer sb2 = new StringBuffer();
		Gson gson = new Gson();
		int itemPerPage = 20; // 한 번에 받아올 갯수
		
		String url = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json";
		String key = "5c2bbd87035c6261362a05d476565551";
		String serviceKey = "0GD5Q0K22YX0E289DF25";
		
		sb.append(url);
		sb.append("?key="+key);
		if (sort == 1) {
			sb.append("&movieNm="+keyword); // 1이면 영화제목 검색
		} else {
			sb.append("&directorNm="+keyword); // 2면 감독명 검색
		}
		countryNm.forEach((country) -> {
			sb.append("&repNationCd="+country); // 국가리스트 입력
		});
		sb.append("&itemPerPage="+itemPerPage);
		sb.append("&openStartDt="+startYear);
		sb.append("&openEndDt="+endYear);
		log.info("서버 요청주소 : " + sb.toString());
		URL reqUrl = new URL(sb.toString()); // 요청주소 생성 완료
		
		HttpURLConnection conn = (HttpURLConnection) reqUrl.openConnection();
		conn.setRequestMethod("GET");
		if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
			reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
		} else {
			reader = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
		}
		
		String line;
		while ((line = reader.readLine()) != null) {
			sb2.append(line);
		}
		
		reader.close(); // 영화 기초정보 받기 완료, 사진 받을 차례
		conn.disconnect();
		
		JsonObject jsonObject = (JsonObject) JsonParser.parseString(sb2.toString());
		JsonObject jsonObject2 = (JsonObject) jsonObject.get("movieListResult");
		JsonArray jsonArray = (JsonArray) jsonObject2.get("movieList");
		int totalCount = jsonObject2.get("totCnt").getAsInt(); // 결과값 갯수
		
		if (totalCount == 0) {
			return null;
		}

		List<MovieFinderOfficeApiDto> movieFinderOfficeApiDtos = new ArrayList<>();
		
		for (int i = 0; i < jsonArray.size(); i++) {
			MovieFinderOfficeApiDto movieFinderOfficeApiDto = 
					gson.fromJson(jsonArray.get(i), MovieFinderOfficeApiDto.class);
			if (movieFinderOfficeApiDto.getMovieNm().contains("!HS") || movieFinderOfficeApiDto.getMovieNm().contains("!HE")) {
				movieFinderOfficeApiDto.setMovieNm(movieFinderOfficeApiDto.getMovieNm().replace("!HS", "").replace("!HE", ""));
			}
			movieFinderOfficeApiDtos.add(movieFinderOfficeApiDto);
		}

		// 사진 받기 시작
		for (MovieFinderOfficeApiDto movieFinderOfficeApiDto : movieFinderOfficeApiDtos) {
			StringBuffer buffer = new StringBuffer();
			buffer.append("http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y");
			buffer.append("&ServiceKey="+serviceKey);
			buffer.append("&title="+movieFinderOfficeApiDto.getMovieNm());
			buffer.append("&releaseDts="+movieFinderOfficeApiDto.getOpenDt().replaceAll("-", ""));
			buffer.append("&repGenreNm="+movieFinderOfficeApiDto.getRepGenreNm());
			buffer.append("&director="+movieFinderOfficeApiDto.getDirectors()[0].getPeopleNm());
			
			URL urlForImg = new URL(buffer.toString());
			System.out.println(urlForImg);
			
			HttpURLConnection connForImg = (HttpURLConnection) urlForImg.openConnection();
			connForImg.setRequestMethod("GET");
			BufferedReader readerForImg;
			
			if (connForImg.getResponseCode() >= 200 && connForImg.getResponseCode() <= 300) {
				readerForImg= new BufferedReader(new InputStreamReader(connForImg.getInputStream()));
			} else {
				readerForImg= new BufferedReader(new InputStreamReader(connForImg.getErrorStream()));
			}
			
			String lineForImg;
			StringBuilder builder = new StringBuilder();
			while ((lineForImg = readerForImg.readLine()) != null) {
				builder.append(lineForImg);
			}
			
			JsonObject jsonObject3 = (JsonObject) JsonParser.parseString(builder.toString());
			JsonObject jsonObject4 = ((JsonArray) jsonObject3.get("Data")).get(0).getAsJsonObject();
			JsonObject jsonObject5 = ((JsonArray) jsonObject4.get("Result")).get(0).getAsJsonObject();
			String imgUrl = jsonObject5.get("posters").getAsString();
			
			if (imgUrl.contains(".jpg")) {
				String[] tmpList = imgUrl.split(".jpg");
				imgUrl = tmpList[0] + ".jpg";
			}
			
			if (imgUrl.contains(".JPG")) {
				String[] tmpList = imgUrl.split(".JPG");
				imgUrl = tmpList[0] + ".JPG";
			}
			
			if (imgUrl.contains(".png")) {
				String[] tmpList = imgUrl.split(".png");
				imgUrl = tmpList[0] + ".png";
			}
			
			if (imgUrl.contains(".PNG")) {
				String[] tmpList = imgUrl.split(".PNG");
				imgUrl = tmpList[0] + ".PNG";
			}
			
			MovieFinderRespDto dto = MovieFinderRespDto.builder()
										.title(movieFinderOfficeApiDto.getMovieNm())
										.imgUrl(imgUrl)
										.openDt(movieFinderOfficeApiDto.getOpenDt())
										.build();
			dtos.add(dto);
		}
		return dtos;
	}
}
