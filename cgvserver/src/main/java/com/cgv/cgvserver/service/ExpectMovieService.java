package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.expectmovie.ExpectMovie;
import com.cgv.cgvserver.domain.expectmovie.ExpectMovieRepository;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ExpectMovieService {
	private final ExpectMovieRepository expectMovieRepository;
	private final MovieRepository movieRepository;
	private final UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<ExpectMovie> 기대되는영화찾기(long id) {
		return expectMovieRepository.findByUserId(id);
	}
	
	@Transactional
	public void 기대되는영화등록(String movieId, long userId) {
		Movie movieEntity = movieRepository.findById(movieId)
				.orElseThrow(() -> {throw new NotFoundMovieException();});
		
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		ExpectMovie expectMovie = ExpectMovie.builder()
									.movie(movieEntity)
									.user(userEntity)
									.build();
		
		expectMovieRepository.save(expectMovie);
	}
}
