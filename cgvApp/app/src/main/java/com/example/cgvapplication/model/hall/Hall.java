package com.example.cgvapplication.model.hall;

import com.example.cgvapplication.model.seat.Seat;
import com.example.cgvapplication.model.theater.Theater;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Hall {

    private Long id;
    private Theater theater;
    private String name;
    private List<Seat> seats;
}
