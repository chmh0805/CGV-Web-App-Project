package com.cgv.cgvserver.handler.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class NotFoundUserException extends UsernameNotFoundException {

	public NotFoundUserException() {
		super("존재하지 않는 사용자입니다.");
	}
}
