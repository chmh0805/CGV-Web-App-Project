package com.cgv.cgvserver.service;

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
	public List<Ticketing> 유저예약정보찾기(long userId) {
		return ticketingRepository.findByUserId(userId);
	}
}
