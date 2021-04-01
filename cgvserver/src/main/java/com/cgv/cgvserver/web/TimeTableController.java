package com.cgv.cgvserver.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.service.MovieService;
import com.cgv.cgvserver.service.TheaterService;
import com.cgv.cgvserver.service.TimeTableService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableReqDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TimeTableController {
	private final TimeTableService timeTableService;
	private final MovieService movieService;
	private final TheaterService theaterService;
	
	@CrossOrigin
	@PostMapping("/timetable")
	public CommonRespDto<?> save(@Valid TimeTableReqDto timeTableReqDto, BindingResult bindingResult) {
		int result = timeTableService.저장하기(timeTableReqDto);
		return new CommonRespDto<>(1, result);
	}
	
	@GetMapping("/timetable")
	public CommonRespDto<?> find() {
		List<Movie> movies =  movieService.영화모두찾기();
		List<Theater> theaters = theaterService.극장전체조회();
		TimeTableRespDto timeTableRespDto = new TimeTableRespDto();
		timeTableRespDto.setMovie(movies);
		timeTableRespDto.setTheater(theaters);
		
		return new CommonRespDto<>(1, timeTableRespDto);
	}
	


}
