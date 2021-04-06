package com.cgv.cgvserver.web.dto.timetable;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTableHallRespDto {
	private String name;
	private BigInteger id;
}
