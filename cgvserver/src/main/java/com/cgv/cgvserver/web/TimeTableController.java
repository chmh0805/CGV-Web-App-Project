package com.cgv.cgvserver.web;

import java.util.List;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.service.MovieService;
import com.cgv.cgvserver.service.TheaterService;
import com.cgv.cgvserver.service.TimeTableService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterReqDto;
import com.cgv.cgvserver.web.dto.timetable.AppTimeTableTheaterRespDto;
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
	public CommonRespDto<?> findAll() {
		List<Movie> movies =  movieService.영화모두찾기();
		List<Theater> theaters = theaterService.극장전체조회();
		TimeTableRespDto timeTableRespDto = new TimeTableRespDto();
		timeTableRespDto.setMovie(movies);
		timeTableRespDto.setTheater(theaters);
		
		return new CommonRespDto<>(1, timeTableRespDto);
	}

	@PostMapping("/timetable/app/theater")
	public CommonRespDto<?> findAllByLocation(@RequestBody AppTimeTableTheaterReqDto dto) {
		List<AppTimeTableTheaterRespDto> dtos = timeTableService.극장별예매(dto);
		System.out.println("/timetable/app/theater : "+dto);
		
		return new CommonRespDto<>(1,dtos);
	}

	@GetMapping("/timetable/movie/{movieId}")
	public CommonRespDto<?> findByMovieId(@PathVariable String movieId) {
		return new CommonRespDto<>(1, timeTableService.영화번호로찾기(movieId));
	}
	
	@GetMapping("/timetable/movie/{movieId}/theater/{theaterId}")
	public CommonRespDto<?> findByMovieIdAndTheaterId(@PathVariable String movieId, @PathVariable long theaterId) {
		return new CommonRespDto<>(1, timeTableService.영화번호와극장번호로찾기(movieId, theaterId));
	}
	
	@GetMapping("/timetable/movie/{movieId}/theater/{theaterId}/month/{month}/day/{day}")
	public CommonRespDto<?> findByAllInfos(@PathVariable String movieId, @PathVariable long theaterId,
									@PathVariable String month, @PathVariable String day) {
		return new CommonRespDto<>(1, timeTableService.전체정보로찾기(movieId, theaterId, month, day));
	}
}
