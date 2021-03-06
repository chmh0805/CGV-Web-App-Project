package com.cgv.cgvserver.handler;

import java.io.IOException;
import java.net.MalformedURLException;
import java.sql.SQLIntegrityConstraintViolationException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.handler.exception.NotFoundNoticeException;
import com.cgv.cgvserver.handler.exception.NotFoundTheaterException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.handler.exception.logs.ExceptionLog;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestControllerAdvice
public class ExceptionAdvicer {
	private static final Logger log = LoggerFactory.getLogger(ExceptionAdvicer.class);
	private final ExceptionList exList;
	
	@ExceptionHandler(BindException.class)
	public CommonRespDto<String> illegalArgumentEx(BindException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler(NotFoundUserException.class)
	public CommonRespDto<String> notFoundUserEx(NotFoundUserException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler(NotFoundMovieException.class)
	public CommonRespDto<String> notFoundMovieEx(NotFoundMovieException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler(NotFoundTheaterException.class)
	public CommonRespDto<String> notFoundTheaterEx(NotFoundTheaterException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler(NotFoundNoticeException.class)
	public CommonRespDto<String> notFoundNoticeEx(NotFoundNoticeException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler(IOException.class)
	public CommonRespDto<String> ioEx(IOException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "?????? ?????????/???????????? ??? ?????? ??????");
	}
	
	@ExceptionHandler(MalformedURLException.class)
	public CommonRespDto<String> malFormUrlEx(MalformedURLException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "???????????? ?????? ??? ????????????");
	}
	
	@ExceptionHandler(SQLIntegrityConstraintViolationException.class)
	public CommonRespDto<String> createSQLException(SQLIntegrityConstraintViolationException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "????????? ?????? ????????? ??????");
	}
	
	@ExceptionHandler(IllegalArgumentException.class)
	public CommonRespDto<String> illegalArgException(IllegalArgumentException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
}
