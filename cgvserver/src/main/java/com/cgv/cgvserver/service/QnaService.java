package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.qna.Qna;
import com.cgv.cgvserver.domain.qna.QnaRepository;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundQnaException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;
import com.cgv.cgvserver.utils.qna.QnaToRespDto;
import com.cgv.cgvserver.web.dto.qna.QnaFindRespDto;
import com.cgv.cgvserver.web.dto.qna.QnaSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class QnaService {
	private final QnaRepository qnaRepository;
	private final UserRepository userRepository;
	
	@Transactional(readOnly = true)
	public List<QnaFindRespDto> 유저아이디로찾기(long userId) {
		List<Qna> qnaEntities = qnaRepository.mFindByUserIdDesc(userId);
		List<QnaFindRespDto> dtos = QnaToRespDto.toDtos(qnaEntities);
		
		return dtos;
	}
	
	@Transactional(readOnly = true)
	public List<QnaFindRespDto> 유저아이디로찾기(long userId, int limit) {
		List<Qna> qnaEntities = qnaRepository.mFindByUserIdDescLimit(userId, limit);
		List<QnaFindRespDto> dtos = QnaToRespDto.toDtos(qnaEntities);
		
		return dtos;
	}
	
	@Transactional
	public void 문의등록(long userId, QnaSaveReqDto qnaSaveReqDto) {
		User userEntity = userRepository.findById(userId)
				.orElseThrow(() -> {throw new NotFoundUserException();});
		
		Qna qna = qnaSaveReqDto.toEntity(userEntity);
		qnaRepository.save(qna);
	}
	
	@Transactional(readOnly = true)
	public QnaFindRespDto 상세보기(long id) {
		Qna qnaEntity = qnaRepository.findById(id)
				.orElseThrow(() -> {throw new NotFoundQnaException();});
		
		QnaFindRespDto dto = QnaToRespDto.toDto(qnaEntity);
		return dto;
	}
}
