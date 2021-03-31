package com.cgv.cgvserver.web.dto.qna;

import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QnaFindRespDto {
	private long id;
	private String title;
	private String content;
	private String state;
	private User user;
	private String createDate;
}
