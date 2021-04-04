package com.cgv.cgvserver.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.timetable.TimeTableRepository;
import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterReqDto;
import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterRespDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TimeTableService {
	private final TimeTableRepository timeTableRepository;
	private final EntityManager entityManager;
	
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
	public List<AppTimeTableTheaterRespDto> 극장별예매(AppTimeTableTheaterReqDto dto) {
		
		StringBuffer sb = new StringBuffer();
		sb.append("SELECT th.location, ti.id timetableId, ti.date, ti.startTime, ti.hallId, ");
		sb.append("h.name hallName, m.age, m.posterImgSrc, m.runningTime, m.title, ");
		sb.append("(SELECT COUNT(*) FROM seat WHERE hallId = ti.hallId) seatCount ");
		sb.append("FROM theater th INNER JOIN timetable ti ON th.id = ti.theaterId ");
		sb.append("INNER JOIN hall h ON ti.hallId = h.id ");
		sb.append("INNER JOIN movie m ON ti.movieId = m.docId WHERE th.location = ?");
		
		JpaResultMapper result = new JpaResultMapper();
		Query query = entityManager.createNativeQuery(sb.toString())
				.setParameter(1, dto.getLocation());
		
		List<AppTimeTableTheaterRespDto> dtos = result.list(query, AppTimeTableTheaterRespDto.class);
		System.out.println("극장별예매 : "+dtos);
		
		return dtos;
	}
	
	
}
