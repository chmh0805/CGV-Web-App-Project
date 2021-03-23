package com.cgv.cgvserver.handler.exception;

public class NotFoundUserException extends Exception {

	public NotFoundUserException() {
		super("존재하지 않는 사용자입니다.");
	}
}
