package com.cgv.cgvserver.web;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.service.MovieService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieDetailApiRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieReqDto;
import com.cgv.cgvserver.web.dto.movie.TrailerRespDto;
import com.cgv.cgvserver.web.dto.movie.moviefinder.MovieFinderRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MovieController {
	private final MovieService movieService;
	private static final Logger log = LoggerFactory.getLogger(MovieController.class);
	
	@GetMapping("/test/movie")
	public List<MovieDetailApiRespDto> getBoxOfficeMovie() throws IOException {
		String oneDaysAgo = LocalDateTime.now().minusDays(1).format(DateTimeFormatter.ofPattern("yyyyMMdd"));
		return movieService.findByBoxOfficeDate(oneDaysAgo);
	}
	@GetMapping("/movie")
	public CommonRespDto<?> findByMovieAll() {
		 return new CommonRespDto<>(1,movieService.영화모두찾기());
	}
	/********** 여기는 혹시 사용할 수 있어서 만들어 놓음 ***********/
	// trailer thumb 가져오기
	@GetMapping("/movie/{movieId}/trailer")
	public CommonRespDto<?> trailerfindByMovieId(@PathVariable String movieId) {	
		List<String> trailerImageSrc = movieService.트레일러리스트(movieId);
		return new CommonRespDto<>(1, trailerImageSrc);
	}
	
	// 트레일러 하나 가져오기 (썸네일 눌렀을 때)
	@GetMapping("/movie/trailer/{trailerId}")
	public CommonRespDto<?> findByTrailerId(@PathVariable Long trailerId) {
		//Trailer trailer
		TrailerRespDto trailerRespDto = movieService.트레일러(trailerId);
		return new CommonRespDto<>(1, trailerRespDto);
	}
	
	@GetMapping("/movie/{movieId}/stillcut")
	public CommonRespDto<?> stillCutfindByMovieId(@PathVariable String movieId) {
		List<String> stillCutImageSrc = movieService.스틸컷리스트(movieId);
		return new CommonRespDto<>(1, stillCutImageSrc);
	}
	/*************************************************************/
	@GetMapping("/movie/boxoffice/list")
	public CommonRespDto<?> findBoxOfficeAll() {
		List<MovieBoxOfficeRespDto> boxOfficeRespDtos = movieService.박스오피스영화리스트();
		return new CommonRespDto<>(1, boxOfficeRespDtos);
	}
	@GetMapping("/movie/{movieId}")
	public CommonRespDto<?> findById(@PathVariable String movieId) {
		Movie movie = movieService.영화상세보기(movieId);
		return new CommonRespDto<>(1, movie);
	}
	
	@PostMapping("/movie/boxoffice")
	public CommonRespDto<?> save() throws IOException {
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
		
		return new CommonRespDto<>(1, null);
		
	}
	
	// 영화 검색기능 추가합니다. (정민혁)
	// sort가 1이면 영화제목검색, 2이면 감독명 검색
	// countryNm : 제작국가
	@GetMapping("/movie/search")
	public CommonRespDto<?> search(@RequestParam int sort, @RequestParam String keyword, @RequestParam List<String> countryNm,
							@RequestParam String startYear, @RequestParam String endYear) {
		List<MovieFinderRespDto> dtos = new ArrayList<>();
		try {
			 dtos = movieService.무비파인더검색(sort, keyword, countryNm, startYear, endYear);
		} catch (IOException e) {
			log.error(e.getStackTrace().toString());
		}
		
		return new CommonRespDto<>(1, dtos);
	}
	
	
}
