package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.notice.Notice;
import com.cgv.cgvserver.domain.notice.NoticeRepository;

import com.cgv.cgvserver.web.dto.notice.NoticeSaveReqDto;

import com.cgv.cgvserver.utils.notice.NoticeToDto;
import com.cgv.cgvserver.web.dto.notice.NoticeFindAllRespDto;
import com.cgv.cgvserver.web.dto.notice.NoticeLimitRespDto;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class NoticeService {

	private final NoticeRepository noticeRepository;

	@Transactional(readOnly = true)
	public List<Notice> 공지뉴스전체조회() {
		return noticeRepository.mFindAll();
	}

	@Transactional
	public void 공지뉴스등록(NoticeSaveReqDto noticeSaveReqDto) {
		Notice notice = noticeSaveReqDto.toEntity();
		notice.setReadCount(0);
		noticeRepository.save(notice);
	}
	
	@Transactional(readOnly = true)
	public List<NoticeLimitRespDto> 리밋찾기(int limit) {
		List<Notice> noticeEntities = noticeRepository.mFindAllDescLimit(limit);
		return NoticeToDto.toLimitDtos(noticeEntities);
	}
	
	@Transactional(readOnly = true)
	public List<NoticeFindAllRespDto> 전체찾기() {
		List<Notice> noticeEntites = noticeRepository.mFindAll();
		return NoticeToDto.toFindAllDtos(noticeEntites);
	}
	
	@Transactional(readOnly = true)
	public List<NoticeFindAllRespDto> 키워드찾기(String keyword) {
		List<Notice> noticeEntities = noticeRepository.mFindByKeyword(keyword);
		return NoticeToDto.toFindAllDtos(noticeEntities);
	}
	
}
