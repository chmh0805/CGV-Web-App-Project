package com.cgv.cgvserver;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.director.Director;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovie;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovieRepository;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.stillcut.StillCut;
import com.cgv.cgvserver.domain.trailer.Trailer;
import com.cgv.cgvserver.service.MovieService;
import com.cgv.cgvserver.utils.movie.ActorUtils;
import com.cgv.cgvserver.utils.movie.BoxOfficeUtils;
import com.cgv.cgvserver.utils.movie.DirectorUtils;
import com.cgv.cgvserver.utils.movie.StillCutUtils;
import com.cgv.cgvserver.utils.movie.TrailerUtils;
import com.cgv.cgvserver.web.dto.movie.MovieDetailApiRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieReqDto;


@SpringBootApplication
public class CgvserverApplication implements CommandLineRunner{
	@Autowired
	private MovieService movieService;
	@Autowired
	private MovieRepository movieRepository;
	@Autowired
	private BoxOfficeMovieRepository boxOfficeMovieRepository;
	@Autowired
	private EntityManager entityManager;
	
	public static void main(String[] args) {
		SpringApplication.run(CgvserverApplication.class, args);
	}

	@Transactional
	@Override
	public void run(String... args) throws Exception {
		
		
		String oneDaysAgo = LocalDateTime.now().minusDays(1).format(DateTimeFormatter.ofPattern("yyyyMMdd"));
		List<MovieDetailApiRespDto> movieDetailApiRespDtos = movieService.findByBoxOfficeDate(oneDaysAgo);
		MovieReqDto movieReqDto = new MovieReqDto();
		
		for (MovieDetailApiRespDto movieDetailApiRespDto : movieDetailApiRespDtos) {
			movieReqDto.setDocId(movieDetailApiRespDto.getDocId());
			movieReqDto.setTitle(movieDetailApiRespDto.getTitle());
			movieReqDto.setSubTitle(movieDetailApiRespDto.getTitleEng());
			movieReqDto.setDirectors(movieDetailApiRespDto.getDirectorNames());
			movieReqDto.setActors(movieDetailApiRespDto.getActorNames());
			movieReqDto.setSummary(movieDetailApiRespDto.getPlot());
			movieReqDto.setCountry(movieDetailApiRespDto.getNation());
			movieReqDto.setReleaseDate(movieDetailApiRespDto.getRepRlsDate());
			movieReqDto.setRunningTime(Integer.parseInt(movieDetailApiRespDto.getRuntime()));
			movieReqDto.setAge(movieDetailApiRespDto.getRating());
			movieReqDto.setGenre(movieDetailApiRespDto.getGenre());
			movieReqDto.setPosterImgSrc(movieDetailApiRespDto.getPosters());
			movieReqDto.setStillCutImgSrc(movieDetailApiRespDto.getStlls());
			movieReqDto.setTrailerUrls(movieDetailApiRespDto.getVodUrl());
			movieReqDto.setThumbImageUrls(movieDetailApiRespDto.getThumImageUrl());
			movieReqDto.setCompany(movieDetailApiRespDto.getCompany());
			movieReqDto.setRank(movieDetailApiRespDto.getRank());
			movieReqDto.setBoxOfficeDate(oneDaysAgo);
			movieService.저장하기(movieReqDto);
		}
		
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
	
//		
	}

}
