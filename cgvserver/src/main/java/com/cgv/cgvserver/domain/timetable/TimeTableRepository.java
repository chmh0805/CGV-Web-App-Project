package com.cgv.cgvserver.domain.timetable;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface TimeTableRepository extends JpaRepository<TimeTable, Long> {
	@Modifying
	@Query(value = "INSERT INTO timetable(date, startTime, movieId, theaterId, hallId) VALUES(:date, :startTime, :movieId, :theaterId, :hallId)", nativeQuery = true)
	int mTimeTable(String date, String startTime, String movieId, long theaterId, long hallId);

	@Query(value = "SELECT * FROM timetable WHERE movieId = :movieId", nativeQuery = true)
	List<TimeTable> findByMovieId(String movieId);
	
	@Query(value = "SELECT * FROM timetable WHERE movieId = :movieId AND theaterId = :theaterId", nativeQuery = true)
	List<TimeTable> mFindByMovieIdAndTheaterId(String movieId, long theaterId);
	
	@Query(value = "SELECT * FROM timetable WHERE movieId = :movieId AND theaterId = :theaterId AND date = :date", nativeQuery = true)
	List<TimeTable> mFindByAllInfo(String movieId, long theaterId, String date);
	
	@Query(value = "SELECT * FROM timetable WHERE date = :date AND theaterId = :theaterId", nativeQuery = true)
	List<TimeTable> mFindByDateAndTheaterId(String date, long theaterId);
}
