package com.cgv.cgvserver.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.seat.Seat;
import com.cgv.cgvserver.domain.seat.SeatRepository;
import com.cgv.cgvserver.domain.ticketing.Ticketing;
import com.cgv.cgvserver.domain.ticketing.TicketingRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SeatService {
	private final SeatRepository seatRepository;
	private final TicketingRepository ticketingRepository;
	
	@Transactional(readOnly = true)
	public List<Seat> 빈좌석조회(long hallId, long timeTableId) {
		List<Seat> seatEntities = seatRepository.findByHallId(hallId);
		List<Seat> dtos = new ArrayList<>(); // 리턴할 리스트
		List<Long> ticketedSeats = new ArrayList<>(); // 영속 X
		
		for (Seat seatEntity : seatEntities) {
			long seatId = seatEntity.getId();
			Ticketing ticketingEntity = ticketingRepository.findBySeatIdAndTimeTableId(seatId, timeTableId);
			if (ticketingEntity != null) {
				ticketedSeats.add(ticketingEntity.getId());
			}
		}
		
		for (Seat seatEntity : seatEntities) {
			boolean isNotReserved = true;
			for (int i = 0; i < ticketedSeats.size(); i++) {
				if (ticketedSeats.get(i) == seatEntity.getId()) {
					isNotReserved = false;
					break;
				}
			}
			if (isNotReserved) {
				dtos.add(seatEntity);
			}
		}

		return dtos;
	}
}
