package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.SeatService;
import com.cgv.cgvserver.web.dto.CommonRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class SeatController {
	private final SeatService seatService;
	
	@GetMapping("/seat/hall/{hallId}/timetable/{timeTableId}")
	public CommonRespDto<?> findByHallAndTimeTable(@PathVariable long hallId, @PathVariable long timeTableId) {
		return new CommonRespDto<>(1, seatService.빈좌석조회(hallId, timeTableId));
	}
}
