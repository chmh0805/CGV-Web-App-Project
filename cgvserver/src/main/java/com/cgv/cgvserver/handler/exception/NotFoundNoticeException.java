package com.cgv.cgvserver.handler.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class NotFoundNoticeException extends UsernameNotFoundException {

	public NotFoundNoticeException() {
		super("존재하지 않는 공지입니다.");
	}
}
