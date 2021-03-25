package com.cgv.cgvserver.domain.seat;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.domain.timetable.TimeTable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Entity
public class Seat {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@ManyToOne
//	private Hall hall;
	
	private String seatRow;
	
	private String seatCol;
}
