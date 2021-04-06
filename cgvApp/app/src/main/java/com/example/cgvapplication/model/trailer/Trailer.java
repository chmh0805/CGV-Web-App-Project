package com.example.cgvapplication.model.trailer;

import com.example.cgvapplication.model.movie.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trailer {
    private Long id;
    private Movie movie;
    private String trailerUrl;
    private String thumbImageUrl;
}
