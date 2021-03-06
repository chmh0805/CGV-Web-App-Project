package com.cgv.cgvserver.service;

import java.util.Calendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.timetable.TimeTable;
import com.cgv.cgvserver.domain.timetable.TimeTableRepository;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeRespDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableHallRespDto;

import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterReqDto;
import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterRespDto;

import com.cgv.cgvserver.web.dto.timetable.TimeTableReqDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableRespDto;

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
		Query query = entityManager.createNativeQuery(sb.toString()).setParameter(1, dto.getLocation());

		List<AppTimeTableTheaterRespDto> dtos = result.list(query, AppTimeTableTheaterRespDto.class);
		System.out.println("극장별예매 : " + dtos);

		return dtos;
	}


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


		return timeTableRepository.mFindByAllInfo(movieId, theaterId, day);
	}

	@Transactional(readOnly = true)
	public List<TimeTable> 전체정보로찾기(String movieId, long theaterId, String date) {

		return timeTableRepository.mFindByAllInfo(movieId, theaterId, date);
	}
	
	@Transactional(readOnly = true)
	public TimeTable 타임테이블정보(long timeTableId) {
		return timeTableRepository.findById(timeTableId).get();
	}

	@Transactional(readOnly = true)
	public List<TimeTableHallRespDto> 상영관리스트찾기(String movieId, long theaterId, String date) {
		StringBuffer sb = new StringBuffer();
		sb.append("select distinct h.name name, h.id id from hall h, theater th, timetable ti ");
		sb.append("where ti.theaterId = th.id and ti.theaterId = ? and ti.hallId = h.id and ti.movieId = ? and ti.date = ?");
		Query query = entityManager.createNativeQuery(sb.toString())
				.setParameter(1, theaterId)
				.setParameter(2, movieId)
				.setParameter(3, date);
		JpaResultMapper result = new JpaResultMapper();
		List<TimeTableHallRespDto> timeTableHallRespDtos = result.list(query, TimeTableHallRespDto.class);
		return timeTableHallRespDtos;
	
	}


}
