package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.FaqService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FaqController {

	private final FaqService faqService;
	
	@GetMapping("/faq")
	public CommonRespDto<?> findAll() {
		return new CommonRespDto<>(1, faqService.Faq전체조회());
	}
	
	@GetMapping("/support/faq")
	public CommonRespDto<?> findAllFaq() {
		return new CommonRespDto<>(1, faqService.전체찾기());
	}
	
	@CrossOrigin
	@PostMapping("/faq")
	public CommonRespDto<?> save(@Valid  @RequestBody FaqSaveReqDto faqSaveReqDto, BindingResult bindingResult) {
		faqService.Faq등록(faqSaveReqDto);
		return new CommonRespDto<>(1, null);
	}

	@GetMapping("/faq/search/{keyword}")
	public CommonRespDto<?> findByKeyword(@PathVariable String keyword) {
		return new CommonRespDto<>(1, faqService.키워드찾기(keyword));
	}
	

	@GetMapping("/faq/{id}")
	public CommonRespDto<?> findById(@PathVariable long id) {
		return new CommonRespDto<>(1, faqService.상세보기(id));
	}

}
