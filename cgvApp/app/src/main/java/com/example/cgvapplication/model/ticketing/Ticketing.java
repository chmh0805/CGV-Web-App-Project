package com.example.cgvapplication.model.ticketing;

import com.example.cgvapplication.model.seat.Seat;
import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.model.user.User;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Ticketing {

    private Long id;
    private User user;
    private String ticketNum;
    private int personType;
    private Seat seat;
    private int state;
    private TimeTable timeTable;
    private Timestamp createDate;
}
