package com.example.cgvapplication.model.director;

import com.example.cgvapplication.model.movie.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Director {

    private Long id;
    private String directorImageUrl;
    private String name;
    private Movie movie;
}
