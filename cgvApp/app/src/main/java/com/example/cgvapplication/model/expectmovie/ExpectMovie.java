package com.example.cgvapplication.model.expectmovie;

import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.user.User;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExpectMovie {

    private Long id;
    private Movie movie;
    private User user;
    private Timestamp createDate;
}
