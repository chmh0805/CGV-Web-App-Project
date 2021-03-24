package com.cgv.cgvserver.web.auth.dto;

import javax.validation.constraints.NotEmpty;

import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JoinReqDto {
	@NotEmpty(message = "아이디를 입력하세요.")
	private String username;
	@NotEmpty(message = "이름을 입력하세요.")
	private String name;
	@NotEmpty(message = "닉네임을 입력하세요.")
	private String nickname;
	@NotEmpty(message = "비밀번호를 입력하세요.")
	private String password;
	@NotEmpty(message = "이메일을 입력하세요.")
	private String email;
	@NotEmpty(message = "전화번호를 입력하세요.")
	private String phone;
	
	public User toEntity() {
		return User.builder()
				.username(username)
				.name(name)
				.nickname(nickname)
				.password(password)
				.email(email)
				.phone(phone)
				.build();
	}
}
