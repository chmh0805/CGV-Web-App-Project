package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.ExpectMovieService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.expectmovie.ExpectSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class ExpectMovieController {
	private final ExpectMovieService expectMovieService;
	
	@GetMapping("/expectMovie/{id}")
	public CommonRespDto<?> findAll(@PathVariable long id) {
		return new CommonRespDto<>(1, expectMovieService.기대되는영화찾기(id));
	}
	
	@PostMapping("/expectMovie")
	public CommonRespDto<?> save(@Valid @RequestBody ExpectSaveReqDto expectSaveReqDto, BindingResult bindingResult) {
		return new CommonRespDto<>(1, null);
	}
}
