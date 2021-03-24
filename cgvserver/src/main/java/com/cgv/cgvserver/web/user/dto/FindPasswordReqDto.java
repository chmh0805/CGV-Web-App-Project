package com.cgv.cgvserver.web.user.dto;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class FindPasswordReqDto {
	@NotEmpty(message = "아이디를 입력하세요.")
	private String username;
	@NotEmpty(message = "전화번호를 입력하세요.")
	private String phone;
}
