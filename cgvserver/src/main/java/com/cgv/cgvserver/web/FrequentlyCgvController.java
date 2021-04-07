package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.FrequentlyCgvService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FrequentlyCgvController {
	private final FrequentlyCgvService frequentlyCgvService;

	@PostMapping("/frequentlycgv/{theaterId}")
	public CommonRespDto<?> save(@RequestHeader("Authorization") String jwtToken, @PathVariable long theaterId) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		frequentlyCgvService.등록하기(theaterId, userId);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/frequentlycgv")
	public CommonRespDto<?> findAll(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, frequentlyCgvService.조회하기(userId));
	}
	
	@DeleteMapping("/frequentlycgv/{theaterId}")
	public CommonRespDto<?> deleteById(@RequestHeader("Authorization") String jwtToken, @PathVariable long theaterId) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		frequentlyCgvService.삭제하기(theaterId, userId);
		return new CommonRespDto<>(1, null);
	}
}
