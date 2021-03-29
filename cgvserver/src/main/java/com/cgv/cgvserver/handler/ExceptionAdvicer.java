package com.cgv.cgvserver.handler;

import java.io.IOException;

import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.handler.exception.NotFoundTheaterException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.web.dto.CommonRespDto;

@RestControllerAdvice
public class ExceptionAdvicer {

	@ExceptionHandler
	public CommonRespDto<String> illegalArgumentEx(BindException e) {
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundUserEx(NotFoundUserException e) {
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundMovieEx(NotFoundMovieException e) {
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundTheaterEx(NotFoundTheaterException e) {
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> ioEx(IOException e) {
		return new CommonRespDto<>(-1, "파일 업로드/다운로드 중 오류 발생");
	}
	
//	@ExceptionHandler
//	public CommonRespDto<String> tokenExpiredEx(TokenExpiredException e) {
//		return new CommonRespDto<>(-1, e.getMessage());
//	}
}
