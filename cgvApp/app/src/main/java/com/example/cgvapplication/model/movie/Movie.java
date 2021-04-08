package com.example.cgvapplication.model.movie;

import com.example.cgvapplication.model.actor.Actor;
import com.example.cgvapplication.model.director.Director;
import com.example.cgvapplication.model.review.Review;
import com.example.cgvapplication.model.stillcut.StillCut;
import com.example.cgvapplication.model.trailer.Trailer;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    private String docId;
    private String title;
    private String subtitle;
    private String genre;
    private String age;
    private String country;
    private String company;
    private int runningTime;
    private String releaseDate;
    private int state; //(1:상영중 2:상영예정)
    private String summary;
    private String disribute;
    private String posterImgSrc;

    private List<Review> review;
    private List<Actor> actors;
    private List<Director> directors;
    private List<StillCut> stillCuts;
    private List<Trailer> trailers;
}
