package com.cgv.cgvserver.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.web.dto.user.DeleteUserReqDto;
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
	
	@Transactional(readOnly = true)
	public String 아이디찾기(FindUsernameReqDto findUsernameReqDto) {
		String name = findUsernameReqDto.getName();
		String email = findUsernameReqDto.getEmail();
		User userEntity = userRepository.findByNameAndEmail(name, email)
				.orElseThrow(() -> {throw new NotFoundUserException();});

		if (userEntity == null) {
			return null;
		} else {
			return userEntity.getUsername();
		}
	}
	
	@Transactional(readOnly = true)
	public FindPasswordRespDto 비밀번호찾기(FindPasswordReqDto findPasswordReqDto) {
		String username = findPasswordReqDto.getUsername();
		String phone = findPasswordReqDto.getPhone();
		User userEntity = userRepository.findByUsernameAndPhone(username, phone)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		FindPasswordRespDto respDto = new FindPasswordRespDto();
		respDto.setId(userEntity.getId());
		return respDto;
	}
	
	@Transactional(readOnly = true)
	public User 회원정보찾기(Long id) {
		return userRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundUserException();});
	}
	
	@Transactional
	public User 회원정보수정(Long id, UserUpdateReqDto updateReqDto) {
		String nickname = updateReqDto.getNickname().trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;");
		String email = updateReqDto.getEmail().trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;");;
		String rawPassword = updateReqDto.getPassword().trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;");;
		String phone = updateReqDto.getPhone().trim().replaceAll(">", "&gt;").replaceAll("<", "&lt;");;
		String encPassword = encoder.encode(rawPassword);
		
		User userEntity = userRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		userEntity.setNickname(nickname);
		userEntity.setPassword(encPassword);
		userEntity.setEmail(email);
		userEntity.setPhone(phone);
		
		return userEntity;
	}
	
	@Transactional
	public void 비밀번호변경(UpdatePasswordReqDto updatePasswordReqDto) {
		User userEntity = userRepository.findById(updatePasswordReqDto.getUserId())
				.orElseThrow(() -> {throw new NotFoundUserException();});
		String rawPassword = updatePasswordReqDto.getPassword();
		String encPassword = encoder.encode(rawPassword);
		
		userEntity.setPassword(encPassword);
	}
	
	@Transactional
	public boolean 회원탈퇴(long userId, DeleteUserReqDto deleteUserReqDto) {
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		if (encoder.matches(deleteUserReqDto.getPassword(), userEntity.getPassword())) {
			userRepository.deleteById(userId);
			return true;
		} else {
			return false;
		}
	}
}
