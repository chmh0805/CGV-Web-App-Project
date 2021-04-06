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
	
	@ExceptionHandler
	public CommonRespDto<String> illegalArgumentEx(BindException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundUserEx(NotFoundUserException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundMovieEx(NotFoundMovieException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundTheaterEx(NotFoundTheaterException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> notFoundNoticeEx(NotFoundNoticeException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, e.getMessage());
	}
	
	@ExceptionHandler
	public CommonRespDto<String> ioEx(IOException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "파일 업로드/다운로드 중 오류 발생");
	}
	
	@ExceptionHandler
	public CommonRespDto<String> malFormUrlEx(MalformedURLException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "영화서버 접근 중 오류발생");
	}
	
	@ExceptionHandler
	public CommonRespDto<String> createSQLException(SQLIntegrityConstraintViolationException e) {
		String errorMsg = e.getMessage();
		log.error(e.getMessage());
		ExceptionLog exLog = ExceptionLog.builder()
								.msg(errorMsg)
								.build();
		exList.addExceptionLog(exLog);
		return new CommonRespDto<>(-1, "무결성 제약 조건에 위배");
	}
	
}
