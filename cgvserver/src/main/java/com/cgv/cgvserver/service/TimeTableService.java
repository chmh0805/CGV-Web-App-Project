package com.cgv.cgvserver.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.timetable.TimeTable;
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
		long theaterId = Long.parseLong(timeTableReqDto.getTheaterId());
		long hallId = Long.parseLong(timeTableReqDto.getHallId());
		int result = timeTableRepository.mTimeTable(date, startTime, movieId, theaterId, hallId);
		
		return result;
	}
	
	@Transactional(readOnly = true)
	public List<TimeTable> 영화번호로찾기(String movieId) {
		return timeTableRepository.findByMovieId(movieId);
	}
	
	@Transactional(readOnly = true)
	public List<TimeTable> 영화번호와극장번호로찾기(String movieId, long theaterId) {
		return timeTableRepository.mFindByMovieIdAndTheaterId(movieId, theaterId);
	}

	@Transactional(readOnly = true)
	public List<TimeTable> 전체정보로찾기(String movieId, long theaterId, String month, String day) {
		Calendar cal = Calendar.getInstance();
		
		if (month.length() == 1) {
			month = "0" + month;
		}
		if (day.length() == 1) {
			day = "0" + day;
		}
		String date = cal.get(Calendar.YEAR) + "-" + month + "-" + day;
		
		return timeTableRepository.mFindByAllInfo(movieId, theaterId, date);
	}
	
}
