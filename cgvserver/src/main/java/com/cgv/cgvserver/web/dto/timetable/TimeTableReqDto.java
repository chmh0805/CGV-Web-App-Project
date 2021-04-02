package com.cgv.cgvserver.web.dto.timetable;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTableReqDto {
	@NotEmpty(message = "상영날짜를 선택해주세요.")
	private String date;
	@NotEmpty(message = "시작시간을 선택해주세요.")
	private String startTime;
	@NotEmpty(message = "영화를 선택해 주세요.")
	private String movieId;
	@NotEmpty(message = "상영관을 선택해주세요.")
	private String hallId;
	@NotEmpty(message = "영화관을 선택해주세요.")
	private String theaterId;
	

}
