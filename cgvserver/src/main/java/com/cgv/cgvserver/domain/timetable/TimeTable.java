package com.cgv.cgvserver.domain.timetable;

import javax.persistence.OneToMany;

import com.cgv.cgvserver.domain.hall.Hall;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Entity
public class TimeTable {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Movie movie;
	
	private Theater theater;

//	private Hall hall;

	private String date; // 상영일
	
	private String startTime; // 상영시간
}
