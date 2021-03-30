package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.NoticeService;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class NoticeController {
	private final NoticeService noticeService;
	
	@GetMapping("/notice/limit/{limit}")
	public CommonRespDto<?> findAllDescLimit(@PathVariable int limit) {
		return new CommonRespDto<>(1, noticeService.리밋찾기(limit));
	}
	
	@GetMapping("/notice")
	public CommonRespDto<?> findAll() {
		return new CommonRespDto<>(1, noticeService.전체찾기());
	}
	
	@GetMapping("/notice/{keyword}")
	public CommonRespDto<?> findByKeyword(@PathVariable String keyword) {
		return new CommonRespDto<>(1, noticeService.키워드찾기(keyword));
	}
}
