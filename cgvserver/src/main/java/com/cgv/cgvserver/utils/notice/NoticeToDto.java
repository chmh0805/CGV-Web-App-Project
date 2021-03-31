package com.cgv.cgvserver.utils.notice;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.notice.Notice;
import com.cgv.cgvserver.web.dto.notice.NoticeFindAllRespDto;
import com.cgv.cgvserver.web.dto.notice.NoticeFindOneRespDto;
import com.cgv.cgvserver.web.dto.notice.NoticeLimitRespDto;

public class NoticeToDto {

	public static List<NoticeLimitRespDto> toLimitDtos(List<Notice> noticeEntities) {
		List<NoticeLimitRespDto> dtos = new ArrayList<>();

		for (Notice notice : noticeEntities) {
			String sort = "";
			if (notice.getSort() == 1) {
				sort = "[극장] ";
			} else if (notice.getSort() == 2) {
				sort = "[시스템점검] ";
			} else {
				sort = "[기타] ";
			}
			
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			NoticeLimitRespDto dto = NoticeLimitRespDto.builder()
										.id(notice.getId())
										.title(sort + notice.getTitle())
										.createDate(format.format(notice.getCreateDate()).toString())
										.build();
			dtos.add(dto);
		}
		
		return dtos;
	}
	
	public static List<NoticeFindAllRespDto> toFindAllDtos(List<Notice> noticeEntities) {
		List<NoticeFindAllRespDto> dtos = new ArrayList<>();

		for (Notice notice : noticeEntities) {
			String sort = "";
			if (notice.getSort() == 1) {
				sort = "[극장]";
			} else if (notice.getSort() == 2) {
				sort = "[시스템점검]";
			} else {
				sort = "[기타]";
			}
			
			SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");

			NoticeFindAllRespDto dto = NoticeFindAllRespDto.builder()
										.id(notice.getId())
										.sort(sort)
										.title(notice.getTitle())
										.createDate(format.format(notice.getCreateDate()).toString())
										.readCount(notice.getReadCount())
										.build();
			dtos.add(dto);
		}
		
		return dtos;
	}
	
	public static NoticeFindOneRespDto toFindOneDto(Notice noticeEntity) {
		String sort = "";
		if (noticeEntity.getSort() == 1) {
			sort = "[극장]";
		} else if (noticeEntity.getSort() == 2) {
			sort = "[시스템점검]";
		} else {
			sort = "[기타]";
		}
		
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		
		return NoticeFindOneRespDto.builder()
						.id(noticeEntity.getId())
						.sort(sort)
						.title(noticeEntity.getTitle())
						.content(noticeEntity.getContent())
						.createDate(format.format(noticeEntity.getCreateDate()).toString())
						.readCount(noticeEntity.getReadCount())
						.build();
	}
}
