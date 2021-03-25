package com.cgv.cgvserver.web.user.dto;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class UpdatePasswordReqDto {
	@NotEmpty(message = "회원 정보가 없습니다.")
	private long userId;
	@NotEmpty(message = "비밀번호를 입력하세요.")
	private String password;
}
