package com.example.cgvapplication.model.movietalk;

import com.example.cgvapplication.model.movie.Movie;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieTalk {
    private Long id;
    private String content;
    private String ImageSrc;
    private Movie movie;
    private Timestamp createDate;
}
