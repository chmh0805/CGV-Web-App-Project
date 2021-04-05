package com.example.cgvapplication.model.timetable;

import com.example.cgvapplication.model.hall.Hall;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.theater.Theater;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TimeTable {
    private Long id;
    private Movie movie;
    private Hall hall;
    private Theater theater;
    private String date;
    private String startTime;
}
