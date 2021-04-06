package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.faq.Faq;
import com.cgv.cgvserver.domain.faq.FaqRepository;
import com.cgv.cgvserver.handler.exception.NotFoundNoticeException;
import com.cgv.cgvserver.utils.faq.FaqToRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqFindAllRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqFindOneRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqSaveReqDto;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class FaqService {

	private final FaqRepository faqRepository;
	
	@Transactional(readOnly = true)
	public List<FaqFindAllRespDto> Faq전체조회() {
		List<Faq> faqEntities = faqRepository.mFindAll();
		return FaqToRespDto.toFindAllDtos(faqEntities);
	}
	
	@Transactional(readOnly = true)
	public List<Faq> 전체찾기() {
		return faqRepository.mFindAll();
	}

	@Transactional
	public void Faq등록(FaqSaveReqDto faqSaveReqDto) {
		Faq faq = faqSaveReqDto.toEntity();
		faq.setReadCount(0);
		faqRepository.save(faq);
	}
	
	@Transactional(readOnly = true)
	public List<FaqFindAllRespDto> 키워드찾기(String keyword) {
		List<Faq> faqEntities = faqRepository.mFindByKeyword(keyword);
		return FaqToRespDto.toFindAllDtos(faqEntities);
	}
	
	@Transactional // 조회수 +1 되기 때문에 readOnly 아님
	public FaqFindOneRespDto 상세보기(long id) {
		Faq faqEntity = faqRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundNoticeException();});
		
		faqEntity.setReadCount(faqEntity.getReadCount()+1);
		return FaqToRespDto.toFindOneDto(faqEntity);
	}
}
