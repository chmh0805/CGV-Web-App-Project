package com.cgv.cgvserver.service;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.ticketing.Ticketing;
import com.cgv.cgvserver.domain.ticketing.TicketingRepository;
import com.cgv.cgvserver.utils.ticketing.TicketMaker;
import com.cgv.cgvserver.web.dto.ticketing.TicketingSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TicketingService {
	private final TicketingRepository ticketingRepository;
	
	
	@Transactional
	public void 예매하기(TicketingSaveReqDto ticketingSaveReqDto) {
		String ticketNum = TicketMaker.makeKey(ticketingSaveReqDto.getUserId(), ticketingSaveReqDto.getTimeTableId(), ticketingSaveReqDto.getSeatId());
		ticketingRepository.mSave(ticketNum, ticketingSaveReqDto.getPersonType(), ticketingSaveReqDto.getSeatId(),
					ticketingSaveReqDto.getTimeTableId(), ticketingSaveReqDto.getUserId());
	}
	
	@Transactional(readOnly = true)
	public Long 예매수(long timeTableId) {
		return ticketingRepository.reservationNum(timeTableId);
	}
	
	@Transactional(readOnly = true)
	public List<Ticketing> 유저예약정보찾기(long userId) {
		return ticketingRepository.findByUserId(userId);
	}
	
	@Transactional(readOnly = true)
	public List<Ticketing> 내가본영화찾기(long userId) {
		List<Ticketing> ticketingEntities = ticketingRepository.findByUserId(userId);
		List<Ticketing> returnDtos = new ArrayList<>();
		Date date = new Date();
		Timestamp now = new Timestamp(date.getTime()); // 현재 시간
		
		for (Ticketing ticketingEntity : ticketingEntities) {
			String movieDate = ticketingEntity.getTimeTable().getDate();
			String movieStartTime = ticketingEntity.getTimeTable().getStartTime();
			String dateString = movieDate + "." + movieStartTime;
			DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd.hh:mm");
			try {
				Date tmpDate = dateFormat.parse(dateString);
				long tmpTime = tmpDate.getTime();
				Timestamp ticketingMovieTime = new Timestamp(tmpTime); // 영화 시작시간 
				if (ticketingMovieTime.before(now)) {
					returnDtos.add(ticketingEntity);
				}
			} catch (ParseException e) {
				e.printStackTrace();
			}
			
		}
		
		return returnDtos;
	}
	
	
}
