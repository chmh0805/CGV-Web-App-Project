package com.cgv.cgvserver.handler.exception;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class NotFoundMovieException extends UsernameNotFoundException {

	public NotFoundMovieException() {
		super("존재하지 않는 영화입니다.");
	}
}
