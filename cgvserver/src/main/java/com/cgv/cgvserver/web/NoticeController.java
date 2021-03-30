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
import com.cgv.cgvserver.web.dto.theater.TheaterSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class NoticeController {
	
	private final NoticeService noticeService;
	
	@GetMapping("/support/news")
	public CommonRespDto<?> findAll() {
		List<Notice> notices = noticeService.공지뉴스전체조회();
		return new CommonRespDto<>(1, notices);
	}
	
	@CrossOrigin
	@PostMapping("/support/news")
	public CommonRespDto<?> save(@Valid  @RequestBody NoticeSaveReqDto noticeSaveReqDto, BindingResult bindingResult) {
		noticeService.공지뉴스등록(noticeSaveReqDto);
		return new CommonRespDto<>(1, null);
	}

}
