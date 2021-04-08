package com.example.cgvapplication.service.dto.timetable;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TicketingTheaterSeatDto {
    private int timeTableId;
    private String startTime;
    private Integer runningTime;
    private BigInteger seatCount;
}
