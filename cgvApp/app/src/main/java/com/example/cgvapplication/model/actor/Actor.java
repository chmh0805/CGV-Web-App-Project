package com.example.cgvapplication.model.actor;

import com.example.cgvapplication.model.movie.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Actor {

    private Long id;
    private String imageUrl;
    private String name;
    private Movie movie;
}
