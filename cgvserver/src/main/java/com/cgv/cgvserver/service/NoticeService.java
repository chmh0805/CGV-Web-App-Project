package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.notice.Notice;
import com.cgv.cgvserver.domain.notice.NoticeRepository;
import com.cgv.cgvserver.web.dto.notice.NoticeSaveReqDto;

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
}
