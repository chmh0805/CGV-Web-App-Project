package com.cgv.cgvserver.handler.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class NotFoundQnaException extends UsernameNotFoundException {

	public NotFoundQnaException() {
		super("존재하지 않는 문의입니다.");
	}
}
