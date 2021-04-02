package com.cgv.cgvserver.web;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.ReviewService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ReviewController {
	
	private final ReviewService reviewService;

	@GetMapping("/movie/{movieId}/review")
	public CommonRespDto<?> reviewByMovieId(@PathVariable String movieId) {
		return new CommonRespDto<>(1, reviewService.무비아이디로찾기(movieId));
	}
	
	@GetMapping("/review")
	public CommonRespDto<?> findByUserId(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, reviewService.유저아이디로찾기(userId));
	}
}
