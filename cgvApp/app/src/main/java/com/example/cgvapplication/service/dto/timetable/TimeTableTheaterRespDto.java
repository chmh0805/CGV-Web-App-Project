package com.example.cgvapplication.service.dto.timetable;

import android.content.Intent;

import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.theater.Theater;

import java.math.BigInteger;
import java.util.List;

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

    private String screeningDate;
}
