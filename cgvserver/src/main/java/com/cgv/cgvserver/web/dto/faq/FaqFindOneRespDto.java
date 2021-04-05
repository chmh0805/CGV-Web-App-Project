package com.cgv.cgvserver.web.dto.faq;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class FaqFindOneRespDto {
	private long id;
	private String sort;
	private String title;
	private String content;
	private String createDate;
	private int readCount;
}
