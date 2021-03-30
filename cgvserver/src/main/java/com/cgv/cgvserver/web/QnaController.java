package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.QnaService;
import com.cgv.cgvserver.utils.MyJWT;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.qna.QnaSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class QnaController {
	private final QnaService qnaService;
	
	@GetMapping("/qna")
	public CommonRespDto<?> findByUserId(@RequestHeader("Authorization") String jwtToken) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, qnaService.유저아이디로찾기(userId));
	}
	
	@GetMapping("/qna/limit/{limit}")
	public CommonRespDto<?> findByUserId(@RequestHeader("Authorization") String jwtToken, @PathVariable int limit) {
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		return new CommonRespDto<>(1, qnaService.유저아이디로찾기(userId, limit));
	}
	
	@PostMapping("/qna")
	public CommonRespDto<?> save(@RequestHeader("Authorization") String jwtToken,
			@RequestBody QnaSaveReqDto qnaSaveReqDto) {
		
		String token = jwtToken.substring(7);
		Long userId = MyJWT.getId(token);
		qnaService.문의등록(userId, qnaSaveReqDto);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/qna/{id}")
	public CommonRespDto<?> findById(@PathVariable long id) {
		return new CommonRespDto<>(1, qnaService.상세보기(id));
	}
}
