package com.cgv.cgvserver.web.dto.faq;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.cgv.cgvserver.domain.faq.Faq;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class FaqSaveReqDto {
	
	@NotNull(message = "게시글의 구분을 선택하세요.")
	private int sort;
	
	@NotEmpty(message = "제목을 입력하세요.")
	private String title;
	
	@NotEmpty(message = "내용을 입력하세요.")
	private String content;

	public Faq toEntity() {
		return Faq.builder()
				.sort(sort)
				.title(title)
				.content(content)
				.build();
	}
}
