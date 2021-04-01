package com.example.cgvapplication.model.seat;

import com.example.cgvapplication.model.hall.Hall;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Seat {
    private Long id;
    private Hall hall;
    private String name;
}
