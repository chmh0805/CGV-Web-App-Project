package com.cgv.cgvserver.web;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.TimeTableService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.timetable.TimeTableReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TimeTableController {
	private final TimeTableService timeTableService;
	
	@PostMapping("/timetable")
	public CommonRespDto<?> save(@RequestBody TimeTableReqDto timeTableReqDto) {
		int result = timeTableService.저장하기(timeTableReqDto);
		return new CommonRespDto<>(1, result);
	}
}
