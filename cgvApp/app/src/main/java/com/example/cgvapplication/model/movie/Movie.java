package com.example.cgvapplication.model.movie;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class Movie {

    private int id;
    private String title;
    private String subtitle;
    private int age;
    private String country;
    private int runningTime;
    private Timestamp releaseDate;
    private int state; //(1:상영중 2:상영예정)
    private String summary;
    private String posterImgSrc;
    private int reviewId;
    private int favorId;
}
