package com.cgv.cgvserver.web.dto.user;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DeleteUserReqDto {
	@NotEmpty(message = "비밀번호를 입력하세요.")
	private String password;
}
