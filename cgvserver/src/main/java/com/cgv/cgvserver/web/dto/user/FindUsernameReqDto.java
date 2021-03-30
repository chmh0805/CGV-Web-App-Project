package com.cgv.cgvserver.web.dto.user;

import javax.validation.constraints.NotEmpty;

import lombok.Data;

@Data
public class FindUsernameReqDto {
	@NotEmpty(message = "이름을 입력하세요.")
	private String name;
	@NotEmpty(message = "이메일을 입력하세요.")
	private String email;
}
