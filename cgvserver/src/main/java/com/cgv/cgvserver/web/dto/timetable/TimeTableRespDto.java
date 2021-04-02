package com.cgv.cgvserver.web.dto.timetable;

import java.util.List;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTableRespDto {
	private List<Movie> movie;
	private List<Theater> theater;
}
