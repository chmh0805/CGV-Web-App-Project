package com.cgv.cgvserver.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.timetable.TimeTableRepository;
import com.cgv.cgvserver.web.dto.timetable.TimeTableReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TimeTableService {
	private final TimeTableRepository timeTableRepository;
	
	@Transactional
	public int 저장하기(TimeTableReqDto timeTableReqDto) {
		String date = timeTableReqDto.getDate();
		String startTime = timeTableReqDto.getStartTime();
		String movieId = timeTableReqDto.getMovieId();
		long theaterId = timeTableReqDto.getTheaterId();
		return timeTableRepository.mTimeTable(date, startTime, movieId, theaterId);
	}

	
	
}
