package com.cgv.cgvserver.domain.timetable;

import java.sql.Timestamp;

import javax.persistence.OneToMany;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.watchedmovie.WatchedMovie;

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
//	
//	private Hall hall;
//	
//	private Timestamp date;
}
