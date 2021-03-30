package com.cgv.cgvserver.web.dto.notice;


import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.cgv.cgvserver.domain.notice.Notice;

import lombok.Data;


@Data
public class NoticeSaveReqDto {
	
	@NotNull(message = "게시글의 구분을 선택하세요.")
	private int sort;
	
	@NotEmpty(message = "제목을 입력하세요.")
	private String title;
	
	@NotEmpty(message = "내용을 입력하세요.")
	private String content;
	
	public Notice toEntity() {
		return Notice.builder()
				.sort(sort)
				.title(title)
				.content(content)
				.build();
	}
	
	
}
