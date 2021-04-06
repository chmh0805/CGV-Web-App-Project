package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.movietalk.MovieTalk;
import com.cgv.cgvserver.domain.movietalk.MovieTalkRepository;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.web.dto.movietalk.MovieTalkSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MovieTalkService {
	private final MovieTalkRepository movieTalkRepository;
	private final MovieRepository movieRepository;
	
	public MovieTalk 저장하기(MovieTalkSaveReqDto movieTalkSaveReqDto) {
		
		Movie movieEntity = movieRepository.findById(movieTalkSaveReqDto.getMovieId()).orElseThrow(() -> {throw new NotFoundMovieException();});
		MovieTalk movieTalk = MovieTalk.builder()
				.movie(movieEntity)
				.content(movieTalkSaveReqDto.getContent())
				.ImageSrc(movieTalkSaveReqDto.getImageSrc())
				.build();
		return movieTalkRepository.save(movieTalk);
	}
	
	public List<MovieTalk> 모두찾기() {
		List<MovieTalk> movieTalks = movieTalkRepository.mMovieTalk();
		return movieTalks;
	}
}



