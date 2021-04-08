package com.example.cgvapplication.service;

import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.model.movie.BoxOfficeMovie;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.review.Review;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.expectmovie.ExpectSaveReqDto;
import com.example.cgvapplication.service.dto.movie.AppMovieHomeRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.example.cgvapplication.service.dto.movie.TrailerRespDto;
import com.example.cgvapplication.service.dto.review.ReviewCountRespDto;
import com.example.cgvapplication.service.dto.review.ReviewFindRespDto;
import com.example.cgvapplication.service.dto.review.ReviewSaveReqDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ReviewService {

    @POST("/review")
    Call<CMRespDto<Review>> save(@Header("Authorization") String token, @Body ReviewSaveReqDto reviewSaveReqDto);

    @GET("/review/{movieId}")
    Call<CMRespDto<List<ReviewFindRespDto>>> reviewByMovieId(@Path("movieId") String movieId);

    @GET("/review/{movieId}/count")
    Call<CMRespDto<ReviewCountRespDto>> reviewCounting(@Path("movieId") String movieId);
    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://10.0.2.2:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
