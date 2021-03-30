package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.service.UserService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.user.FindPasswordReqDto;
import com.cgv.cgvserver.web.dto.user.FindPasswordRespDto;
import com.cgv.cgvserver.web.dto.user.FindUsernameReqDto;
import com.cgv.cgvserver.web.dto.user.UpdatePasswordReqDto;
import com.cgv.cgvserver.web.dto.user.UserUpdateReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class UserController {

	private final UserService userService;
	
	@PostMapping("/findUsername")
	public CommonRespDto<?> findUsername(@Valid @RequestBody FindUsernameReqDto findUsernameReqDto,
									BindingResult bindingResult) {
		
		String username = userService.아이디찾기(findUsernameReqDto);
		if (username == null) {
			return new CommonRespDto<>(-1, null);
		} else {
			return new CommonRespDto<>(1, username);
		}
	}
	
	@PostMapping("/findPassword")
	public CommonRespDto<?> findPassword(@Valid @RequestBody FindPasswordReqDto findPasswordReqDto,
									BindingResult bindingResult) {
		
		FindPasswordRespDto respDto = userService.비밀번호찾기(findPasswordReqDto);
		if (respDto == null) {
			return new CommonRespDto<>(-1, null);
		} else {
			return new CommonRespDto<>(1, respDto);
		}
	}
	
	@PutMapping("/changePassword")
	public CommonRespDto<?> changePassword(@RequestBody UpdatePasswordReqDto updatePasswordReqDto, BindingResult bindingResult) {
		userService.비밀번호변경(updatePasswordReqDto);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/user")
	public CommonRespDto<?> findById(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		User userEntity = userService.회원정보찾기(userId);
		return new CommonRespDto<>(1, userEntity);
	}
	
	@PutMapping("/user")
	public CommonRespDto<?> updateById(@RequestHeader("Authorization") String jwtToken,
			@Valid @RequestBody UserUpdateReqDto updateReqDto, BindingResult bindingResult) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		userService.회원정보수정(userId, updateReqDto);
		return new CommonRespDto<>(1, null);
	}
}
