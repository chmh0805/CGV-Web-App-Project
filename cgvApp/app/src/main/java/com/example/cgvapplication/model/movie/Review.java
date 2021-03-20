package com.example.cgvapplication.model.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    // 테스트
    private int id;
    private String title;
    private String content;
    private boolean isLike;
}
