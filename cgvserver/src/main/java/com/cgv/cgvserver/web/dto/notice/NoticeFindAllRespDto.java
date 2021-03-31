package com.cgv.cgvserver.web.dto.notice;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class NoticeFindAllRespDto {
	private long id;
	private String sort;
	private String title;
	private String createDate;
	private int readCount;
}
