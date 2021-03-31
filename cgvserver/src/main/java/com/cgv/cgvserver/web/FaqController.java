package com.cgv.cgvserver.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.faq.Faq;
import com.cgv.cgvserver.service.FaqService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class FaqController {

	private final FaqService faqService;
	
	@GetMapping("/support/faq")
	public CommonRespDto<?> findAll() {
		List<Faq> faqs = faqService.Faq전체조회();
		return new CommonRespDto<>(1, faqs);
	}
	
	@CrossOrigin
	@PostMapping("/support/faq")
	public CommonRespDto<?> save(@Valid  @RequestBody FaqSaveReqDto faqSaveReqDto, BindingResult bindingResult) {
		faqService.Faq등록(faqSaveReqDto);
		return new CommonRespDto<>(1, null);
	}
}
