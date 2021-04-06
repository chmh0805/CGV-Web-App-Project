package com.cgv.cgvserver.domain.timetable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.cgv.cgvserver.domain.hall.Hall;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class TimeTable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JoinColumn(name="movieId")
	@ManyToOne
	private Movie movie;
	
//	@JoinColumn(name="theaterId")
//	@ManyToOne
//	private Theater theater;
	
	@JoinColumn(name="hallId")
	@ManyToOne(cascade = CascadeType.ALL)
	private Hall hall;
	
	@JoinColumn(name="theaterId")
	@ManyToOne
	private Theater theater;
	
	private String date; // 상영일
	
	private String startTime; // 상영시간
}
