package com.cgv.cgvserver.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.web.dto.user.FindPasswordReqDto;
import com.cgv.cgvserver.web.dto.user.FindPasswordRespDto;
import com.cgv.cgvserver.web.dto.user.FindUsernameReqDto;
import com.cgv.cgvserver.web.dto.user.UpdatePasswordReqDto;
import com.cgv.cgvserver.web.dto.user.UserUpdateReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {

	private final UserRepository userRepository;
	private final BCryptPasswordEncoder encoder;
	
	public String 아이디찾기(FindUsernameReqDto findUsernameReqDto) {
		String name = findUsernameReqDto.getName();
		String email = findUsernameReqDto.getEmail();
		User userEntity = userRepository.findByNameAndEmail(name, email);
		
		if (userEntity == null) {
			return null;
		} else {
			return userEntity.getUsername();
		}
	}
	
	public FindPasswordRespDto 비밀번호찾기(FindPasswordReqDto findPasswordReqDto) {
		String username = findPasswordReqDto.getUsername();
		String phone = findPasswordReqDto.getPhone();
		User userEntity = userRepository.findByUsernameAndPhone(username, phone);
		
		FindPasswordRespDto respDto = new FindPasswordRespDto();
		respDto.setId(userEntity.getId());
		
		if (userEntity == null) {
			return null;
		} else {
			return respDto;
		}
	}
	
	public User 회원정보찾기(Long id) {
		return userRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundUserException();});
	}
	
	@Transactional
	public void 회원정보수정(Long id, UserUpdateReqDto updateReqDto) {
		User userEntity = userRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		String rawPassword = updateReqDto.getPassword();
		String encPassword = encoder.encode(rawPassword);
		
		userEntity.setNickname(updateReqDto.getNickname());
		userEntity.setPassword(encPassword);
		userEntity.setEmail(updateReqDto.getEmail());
		userEntity.setPhone(updateReqDto.getPassword());
	}
	
	@Transactional
	public void 비밀번호변경(UpdatePasswordReqDto updatePasswordReqDto) {
		User userEntity = userRepository.findById(updatePasswordReqDto.getUserId())
				.orElseThrow(() -> {throw new NotFoundUserException();});
		String rawPassword = updatePasswordReqDto.getPassword();
		String encPassword = encoder.encode(rawPassword);
		
		userEntity.setPassword(encPassword);
	}
}
