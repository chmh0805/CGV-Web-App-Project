package com.cgv.cgvserver.handler;

import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.auth0.jwt.exceptions.TokenExpiredException;
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
	public CommonRespDto<String> tokenExpiredEx(TokenExpiredException e) {
		return new CommonRespDto<>(-1, e.getMessage());
	}
}
