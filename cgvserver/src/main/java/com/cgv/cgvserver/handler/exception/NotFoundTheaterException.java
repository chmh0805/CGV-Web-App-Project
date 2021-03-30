package com.cgv.cgvserver.handler.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class NotFoundTheaterException extends UsernameNotFoundException {

	public NotFoundTheaterException() {
		super("극장 정보를 찾을 수 없습니다.");
	}
}
