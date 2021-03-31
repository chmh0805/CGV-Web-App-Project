package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.ExpectMovieService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.expectmovie.ExpectSaveReqDto;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class ExpectMovieController {
	private final ExpectMovieService expectMovieService;
	
	@GetMapping("/expectMovie")
	public CommonRespDto<?> findAll(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, expectMovieService.기대되는영화찾기(userId));
	}
	
	@PostMapping("/expectMovie")
	public CommonRespDto<?> save(@RequestHeader("Authorization") String jwtToken,
			@Valid @RequestBody ExpectSaveReqDto expectSaveReqDto, BindingResult bindingResult) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		expectMovieService.기대되는영화등록(expectSaveReqDto.getMovieId(), userId);
		return new CommonRespDto<>(1, null);
	}
}
