package com.example.cgvapplication.service.dto.timetable;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTableTheaterRespDto {
    private String location;
    private BigInteger timetableId;
    private String date;
    private String startTime;
    private BigInteger hallId;
    private String hallName;
    private String age;
    private String posterImgSrc;
    private Integer runningTime;
    private String title;
    private BigInteger seatCount;
}