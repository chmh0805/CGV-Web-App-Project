package com.cgv.cgvserver.domain.ticketing;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface TicketingRepository extends JpaRepository<Ticketing, Long> {
	Ticketing findBySeatIdAndTimeTableId(long seatId, long timeTableId);
	
	@Modifying
	@Query(value = "INSERT INTO ticketing(state, ticketNum, personType, seatId, timeTableId, userId, createDate) VALUES(0, :ticketNum, :personType, :seatId, :timeTableId, :userId, now())", nativeQuery = true)
	void mSave(String ticketNum, int personType, long seatId, long timeTableId, long userId);
	
	List<Ticketing> findByUserId(long userId);
	
	@Query(value="select count(*) reservationNum from ticketing where timeTableId = :timeTableId", nativeQuery = true)
	Long reservationNum(long timeTableId);
}
