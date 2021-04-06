package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.expectmovie.ExpectMovie;
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
		ExpectMovie expectMovie = expectMovieService.기대되는영화등록(expectSaveReqDto.getMovieId(), userId);
		return new CommonRespDto<>(1, expectMovie);
	}
	
	@DeleteMapping("/expectMovie/{movieId}")
	public CommonRespDto<?> deleteById(@RequestHeader("Authorization") String jwtToken, @PathVariable String movieId) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		expectMovieService.삭제하기(movieId, userId);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/expectMovie/{movieId}")
	public CommonRespDto<?> findBymovieIdAndUserId(@RequestHeader("Authorization") String jwtToken, @PathVariable String movieId) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		String docId = expectMovieService.기대되는영화하나가져오기(movieId, userId);
		return new CommonRespDto<>(1,docId);
	}

	@PostMapping("/expectMovie/{movieId}/expect")
	public CommonRespDto<?> expect(@RequestHeader("Authorization") String jwtToken, @PathVariable String movieId){
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		
		expectMovieService.기대돼요(userId, movieId);
		return new CommonRespDto<>(1, null);
	}
	
	@DeleteMapping("/expectMovie/{movieId}/expect")
	public CommonRespDto<?> Unexpect(@RequestHeader("Authorization") String jwtToken, @PathVariable String movieId){
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		
		expectMovieService.기대돼요취소(userId, movieId);
		return new CommonRespDto<>(1, null);
	}
}
