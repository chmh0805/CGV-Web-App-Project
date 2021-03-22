package com.cgv.cgvserver.web.auth.dto;

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
	private String username;
	private String name;
	private String nickname;
	private String password;
	private String email;
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
