package com.cgv.cgvserver.service;

import java.math.BigInteger;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.expectmovie.ExpectMovie;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.domain.review.ReviewRepository;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.utils.Review.ReviewToRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeRespDto;
import com.cgv.cgvserver.web.dto.review.ReviewCountRespDto;
import com.cgv.cgvserver.web.dto.review.ReviewFindRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ReviewService {

	private final ReviewRepository reviewRepository;
	private final MovieRepository movieRepository;
	private final UserRepository userRepository;
	private final EntityManager entityManager;
	
	@Transactional(readOnly = true)
	public List<ReviewFindRespDto> 무비아이디로찾기(String movieId) {
		List<Review> reviewEntities = reviewRepository.mFindByMovieIdDesc(movieId);
		List<ReviewFindRespDto> dtos = ReviewToRespDto.toDtos(reviewEntities);
		
		return dtos;
	}
	
	@Transactional(readOnly = true)
	public List<ReviewFindRespDto> 유저아이디로찾기(long userId) {
		List<Review> reviewEntities = reviewRepository.mFindByUserIdDesc(userId);
		List<ReviewFindRespDto> dtos = ReviewToRespDto.toDtos(reviewEntities);
		
		return dtos;
	}
	
	@Transactional
	public Review 리뷰등록(String movieId, long userId, String content, int isLike) {
		content.replaceAll(">", "&gt;").replaceAll("<", "&lt;");
		
		Movie movieEntity = movieRepository.findById(movieId)
				.orElseThrow(() -> {throw new NotFoundMovieException();});
		
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		Review review = Review.builder()
								.content(content)
								.movie(movieEntity)
								.user(userEntity)
								.isLike(isLike)
								.build();
		
		return reviewRepository.save(review);
	}
	
	@Transactional(readOnly = true)
	public ReviewCountRespDto 무비아이디로카운팅(String movieId) {
		Query query = entityManager.createNativeQuery("SELECT COUNT(id) FROM review WHERE movieId = ? ")
				.setParameter(1, movieId);
		JpaResultMapper result = new JpaResultMapper();
		ReviewCountRespDto count = result.uniqueResult(query, ReviewCountRespDto.class);
		
//		sb.append("SELECT rankNum, docId, posterImgSrc, title, releaseDate, age ");
//		sb.append("FROM boxofficemovie AS bm inner join movie AS m ");
//		sb.append("WHERE bm.movieId = m.docId order by rankNum ASC ");
//		
//		Query query = entityManager.createNativeQuery(sb.toString());
//		
//		JpaResultMapper result = new JpaResultMapper();
//		List<MovieBoxOfficeRespDto> movieBoxOfficeRespDtos = result.list(query, MovieBoxOfficeRespDto.class);
//		@Query(value = "SELECT COUNT(id) FROM review WHERE userId = :movieId")
//		long mCountingReview(String movieId);
		return count;
	}
}
