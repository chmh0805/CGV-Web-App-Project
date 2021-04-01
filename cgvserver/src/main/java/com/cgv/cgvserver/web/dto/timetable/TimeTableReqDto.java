package com.cgv.cgvserver.web.dto.timetable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTableReqDto {
	private String date;
	private String startTime;
	private String movieId;
	private long theaterId;
	

}
