package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.domain.review.ReviewRepository;

import com.cgv.cgvserver.utils.Review.ReviewToRespDto;
import com.cgv.cgvserver.web.dto.review.ReviewFindRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ReviewService {

	private final ReviewRepository reviewRepository;
	
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
}
