package com.example.cgvapplication.model.reply;

import com.example.cgvapplication.model.movie.Review;
import com.example.cgvapplication.model.user.User;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reply {

    private Long id;
    private User user;
    private String content;
    private Review review;
    private Timestamp createDate;
}
