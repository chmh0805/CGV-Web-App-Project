package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.service.AuthService;
import com.cgv.cgvserver.web.auth.dto.JoinReqDto;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RequiredArgsConstructor
@RestController
public class AuthController {

	private final AuthService authService;
	
	private final BCryptPasswordEncoder encoder;
	
	@PostMapping("/auth/join")
	public CommonRespDto<?> join(@Valid @RequestBody JoinReqDto joinReqDto, BindingResult bindingResult) {
		User user = joinReqDto.toEntity();
		String rawPassword = joinReqDto.getPassword();
		String encPassword = encoder.encode(rawPassword);
		user.setPassword(encPassword);
		user.setRole("USER");
		return new CommonRespDto<>(authService.회원가입(user), null);
	}
}
