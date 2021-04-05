package com.cgv.cgvserver.domain.seat;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SeatRepository extends JpaRepository<Seat, Long> {
	
	@Query(value = "SELECT * FROM seat WHERE hallId = :hallId", nativeQuery = true)
	List<Seat> findByHallId(long hallId);
}
