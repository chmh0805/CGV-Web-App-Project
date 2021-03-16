package com.example.cgvapplication.model.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//테스트
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MoviePerson {
    private int id;
    private String name;
    private int imgSrc;
    private boolean isDirector;
}
