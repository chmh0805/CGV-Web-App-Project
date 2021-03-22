package com.cgv.cgvserver.web;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class UserController {
	
	private final BCryptPasswordEncoder encoder;
	private final UserRepository userRepository;
	
	@GetMapping("/test")
	public String test() {
		return "test 성공";
	}
	
	@PostMapping("/test")
	public User saveTest() {
		User user = new User();
		user.setUsername("ssar");
		user.setPassword(encoder.encode("1234"));
		user.setRole("ROLE_USER");
		return userRepository.save(user);
	}
	
	@GetMapping("/user")
	public String user() {
		return "인증 성공";
	}
}
