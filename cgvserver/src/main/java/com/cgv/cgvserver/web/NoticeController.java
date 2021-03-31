package com.cgv.cgvserver.web;


import java.util.List;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.notice.Notice;
import com.cgv.cgvserver.service.NoticeService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.notice.NoticeSaveReqDto;

import org.springframework.web.bind.annotation.PathVariable;




import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class NoticeController {

	
	private final NoticeService noticeService;
	
	@GetMapping("/support/news")
	public CommonRespDto<?> findAllNotice() {
		List<Notice> notices = noticeService.공지뉴스전체조회();
		return new CommonRespDto<>(1, notices);
	}
	
	@CrossOrigin
	@PostMapping("/notice")
	public CommonRespDto<?> save(@Valid  @RequestBody NoticeSaveReqDto noticeSaveReqDto, BindingResult bindingResult) {
		noticeService.공지뉴스등록(noticeSaveReqDto);
		return new CommonRespDto<>(1, null);
	}

	@GetMapping("/notice/limit/{limit}")
	public CommonRespDto<?> findAllDescLimit(@PathVariable int limit) {
		return new CommonRespDto<>(1, noticeService.리밋찾기(limit));
	}
	
	@GetMapping("/notice")
	public CommonRespDto<?> findAll() {
		return new CommonRespDto<>(1, noticeService.전체찾기());
	}
	
	@GetMapping("/notice/search/{keyword}")
	public CommonRespDto<?> findByKeyword(@PathVariable String keyword) {
		return new CommonRespDto<>(1, noticeService.키워드찾기(keyword));
	}
	
	@GetMapping("/notice/{id}")
	public CommonRespDto<?> findById(@PathVariable long id) {
		return new CommonRespDto<>(1, noticeService.상세보기(id));
	}
}
