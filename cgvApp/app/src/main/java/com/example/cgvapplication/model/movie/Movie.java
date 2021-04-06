package com.example.cgvapplication.model.movie;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class Movie {

    private String docId;
    private String title;
    private String subtitle;
    private String genre;
    private String age;
    private String country;
    private int runningTime;
    private String releaseDate;
    private int state; //(1:상영중 2:상영예정)
    private String summary;
    private String disribute;
    private String posterImgSrc;
}
