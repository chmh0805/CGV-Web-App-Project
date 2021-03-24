package com.cgv.cgvserver.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AuthService {

	private final UserRepository userRepository;
	
	@Transactional
	public int 회원가입(User user) {
		User userEntity = userRepository.save(user);
		if (userEntity != null) {
			return 1;
		} else {
			return -1;
		}
	}
}
