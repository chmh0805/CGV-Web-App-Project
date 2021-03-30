package com.cgv.cgvserver.utils.qna;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.qna.Qna;
import com.cgv.cgvserver.web.dto.qna.QnaFindRespDto;

public class QnaToRespDto {

	public static List<QnaFindRespDto> toDtos(List<Qna> qnaEntities) {
		List<QnaFindRespDto> dtos = new ArrayList<>();

		for (Qna qna : qnaEntities) {
			String tmpState = (qna.getState() == 0) ? "처리중" : "처리완료";
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			QnaFindRespDto dto = QnaFindRespDto.builder()
					.id(qna.getId())
					.title(qna.getTitle())
					.content(qna.getContent())
					.user(qna.getUser())
					.state(tmpState)
					.createDate(format.format(qna.getCreateDate()).toString())
					.build();
			
			dtos.add(dto);
		}
		
		return dtos;
	}
	
	public static QnaFindRespDto toDto(Qna qnaEntity) {
		String tmpState = (qnaEntity.getState() == 0) ? "처리중" : "처리완료";
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

		QnaFindRespDto dto = QnaFindRespDto.builder()
				.id(qnaEntity.getId())
				.title(qnaEntity.getTitle())
				.content(qnaEntity.getContent())
				.user(qnaEntity.getUser())
				.state(tmpState)
				.createDate(format.format(qnaEntity.getCreateDate()).toString())
				.build();
			
		return dto;
	}
}
