package com.example.cgvapplication.service.dto.review;

import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewFindRespDto {
    private long id;
    private String content;
    private int isLike;
    private User user;
    private Movie movie;
    private String createDate;
}
