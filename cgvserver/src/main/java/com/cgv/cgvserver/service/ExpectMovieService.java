package com.cgv.cgvserver.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
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
	private final EntityManager entityManager;
	
	@Transactional(readOnly = true)
	public List<ExpectMovie> 기대되는영화찾기(long id) {
		return expectMovieRepository.findByUserId(id);
	}
	
	@Transactional
	public ExpectMovie 기대되는영화등록(String movieId, long userId) {
		Movie movieEntity = movieRepository.findById(movieId)
				.orElseThrow(() -> {throw new NotFoundMovieException();});
		
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		ExpectMovie expectMovie = ExpectMovie.builder()
									.movie(movieEntity)
									.user(userEntity)
									.build();
		
		return expectMovieRepository.save(expectMovie);
	}
	

	@Transactional
	public void 삭제하기(String movieId, long userId) {
		Query query = entityManager.createNativeQuery("DELETE FROM expectmovie WHERE movieId = ? AND userId = ? ")
				.setParameter(1, movieId)
				.setParameter(2, userId);
		query.executeUpdate();

	}
	
	@Transactional(readOnly = true)
	public String 기대되는영화하나가져오기(String movieId, long userId) {
		Query query = entityManager.createNativeQuery("SELECT movieId FROM expectmovie WHERE movieId = ? AND userId = ?")
				.setParameter(1, movieId)
				.setParameter(2, userId);
		JpaResultMapper result = new JpaResultMapper();
		String docId = result.uniqueResult(query, String.class);
		
		return docId;
		
	}
}
