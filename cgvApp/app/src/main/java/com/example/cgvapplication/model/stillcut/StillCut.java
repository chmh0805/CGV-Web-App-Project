package com.example.cgvapplication.model.stillcut;

import com.example.cgvapplication.model.movie.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StillCut {
    private Long id;
    private Movie movie;
    private String imageUrl;
}
