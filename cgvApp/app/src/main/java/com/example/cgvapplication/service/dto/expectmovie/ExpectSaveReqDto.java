package com.example.cgvapplication.service.dto.expectmovie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExpectSaveReqDto {
    private String movieId;
    private long userId;
}
