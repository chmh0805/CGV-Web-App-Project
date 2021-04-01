package com.cgv.cgvserver.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;

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
	
	public User 아이디중복체크(String username) {
		return userRepository.findByUsername(username);
	}
	
	@Transactional(readOnly = true)
	public String 권한조회(long id) {
		User userEntity = userRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		return userEntity.getRole();
	}
}
