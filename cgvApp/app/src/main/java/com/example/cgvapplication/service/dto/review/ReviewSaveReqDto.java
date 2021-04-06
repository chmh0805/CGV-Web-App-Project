package com.example.cgvapplication.service.dto.review;

import lombok.Data;

@Data
public class ReviewSaveReqDto {
    private long userId;
    private String movieId;
    private String content;
    private int isLike;
}
