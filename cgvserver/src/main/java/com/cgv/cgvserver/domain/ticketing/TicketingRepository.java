package com.cgv.cgvserver.domain.ticketing;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TicketingRepository extends JpaRepository<Ticketing, Long> {
	Ticketing findBySeatIdAndTimeTableId(long seatId, long timeTableId);
}
