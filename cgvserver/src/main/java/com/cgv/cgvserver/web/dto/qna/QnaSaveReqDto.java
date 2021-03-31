package com.cgv.cgvserver.web.dto.qna;

import com.cgv.cgvserver.domain.qna.Qna;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class QnaSaveReqDto {
	private String title;
	private String content;
	
	public Qna toEntity(User userEntity) {
		return Qna.builder()
				.title(title)
				.content(content)
				.state(0) // 0은 미처리
				.user(userEntity)
				.build();
	}
}
