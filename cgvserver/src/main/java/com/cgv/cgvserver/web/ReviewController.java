package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.expectmovie.ExpectMovie;
import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.service.ReviewService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.review.ReviewSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ReviewController {
	
	private final ReviewService reviewService;

	@GetMapping("/review/{movieId}")
	public CommonRespDto<?> reviewByMovieId(@PathVariable String movieId) {
		return new CommonRespDto<>(1, reviewService.무비아이디로찾기(movieId));
	}
	
	@GetMapping("/review")
	public CommonRespDto<?> findByUserId(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, reviewService.유저아이디로찾기(userId));
	}
	
	@PostMapping("/review")
	public CommonRespDto<?> save(@RequestHeader("Authorization") String jwtToken, @RequestBody ReviewSaveReqDto reviewSaveReqDto) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		Review review = reviewService.리뷰등록(reviewSaveReqDto.getMovieId(), userId, reviewSaveReqDto.getContent(), reviewSaveReqDto.getIsLike());;
		return new CommonRespDto<>(1, review);
	}
}
