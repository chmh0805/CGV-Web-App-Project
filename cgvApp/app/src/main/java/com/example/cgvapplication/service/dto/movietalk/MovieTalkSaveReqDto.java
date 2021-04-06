package com.example.cgvapplication.service.dto.movietalk;

import lombok.Data;

@Data
public class MovieTalkSaveReqDto {
    private String movieId;
    private String content;
    private String imageSrc;
}
