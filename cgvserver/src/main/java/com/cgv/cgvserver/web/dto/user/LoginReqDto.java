package com.cgv.cgvserver.web.dto.user;

import lombok.Data;

@Data
public class LoginReqDto {
	private String username;
	private String password;
}