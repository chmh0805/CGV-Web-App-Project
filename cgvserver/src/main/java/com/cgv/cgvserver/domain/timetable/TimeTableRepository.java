package com.cgv.cgvserver.domain.timetable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {
	@Modifying
	@Query(value = "INSERT INTO timetable(date, startTime, movieId, theaterId, hallId) VALUES(:date, :startTime, :movieId, :theaterId, :hallId)", nativeQuery = true)
	int mTimeTable(String date, String startTime, String movieId, long theaterId, long hallId);


}
