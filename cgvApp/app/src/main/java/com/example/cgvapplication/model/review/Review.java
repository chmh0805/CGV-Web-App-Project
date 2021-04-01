package com.example.cgvapplication.model.review;

import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.reply.Reply;
import com.example.cgvapplication.model.user.User;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    private Long id;
    private User user;
    private String content;
    private Movie movie;
    private int isLike;
    private List<Reply> replies;
    private Timestamp createDate;
}
