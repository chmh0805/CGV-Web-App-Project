package com.cgv.cgvserver.utils.faq;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.faq.Faq;
import com.cgv.cgvserver.web.dto.faq.FaqFindAllRespDto;
import com.cgv.cgvserver.web.dto.faq.FaqFindOneRespDto;

public class FaqToRespDto {

	public static List<FaqFindAllRespDto> toFindAllDtos(List<Faq> faqEntites) {
		List<FaqFindAllRespDto> dtos = new ArrayList<>();
		for (Faq faq : faqEntites) {
			String sort = "";
			if (faq.getSort() == 1) {
				sort = "[예매/매표]";
			} else if (faq.getSort() == 2) {
				sort = "[관람권/결제수단]";
			}
			
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			FaqFindAllRespDto dto = FaqFindAllRespDto.builder()
										.id(faq.getId())
										.sort(sort)
										.title(faq.getTitle())
										.content(faq.getContent())
										.createDate(format.format(faq.getCreateDate()).toString())
										.readCount(faq.getReadCount())
										.build();
			dtos.add(dto);
		}
		
		return dtos;
	}
	
	
	public static FaqFindOneRespDto toFindOneDto(Faq faqEntity) {
		String sort = "";
		if (faqEntity.getSort() == 1) {
			sort = "[예매/매표]";
		} else if (faqEntity.getSort() == 2) {
			sort = "[관람권/결제수단]";
		} 
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		
		return FaqFindOneRespDto.builder()
						.id(faqEntity.getId())
						.sort(sort)
						.title(faqEntity.getTitle())
						.content(faqEntity.getContent())
						.createDate(format.format(faqEntity.getCreateDate()).toString())
						.readCount(faqEntity.getReadCount())
						.build();
	}
}
