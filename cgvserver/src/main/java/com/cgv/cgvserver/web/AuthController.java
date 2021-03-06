package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.service.AuthService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.auth.JoinReqDto;

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
	
	@GetMapping("/auth/role/{id}")
	public CommonRespDto<?> getAuth(@PathVariable long id) {
		return new CommonRespDto<>(1, authService.권한조회(id));
	}
	
	@PostMapping("/auth/username")
	public CommonRespDto<?> findByUsername(@RequestBody String username){
		if(authService.아이디중복체크(username)==null) {
			return new CommonRespDto<>(1, "사용가능");
		} else {
			return new CommonRespDto<>(1, "사용불가");
		}
		
	}
}
