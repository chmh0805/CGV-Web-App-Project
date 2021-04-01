package com.example.cgvapplication.model.theater;

import com.example.cgvapplication.model.hall.Hall;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Theater {
    private Long id;
    private String name;
    private String area;
    private String location;
    private String phone;
    private String theaterImageUrl;
    private List<Hall> halls;
}
