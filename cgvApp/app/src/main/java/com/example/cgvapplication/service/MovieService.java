package com.example.cgvapplication.service;

import com.example.cgvapplication.model.movie.BoxOfficeMovie;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.AppMovieHomeRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.example.cgvapplication.service.dto.movie.TrailerRespDto;

import java.util.List;

import lombok.Getter;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface MovieService {

    // 트레일러 thumb 가져오기
    @GET("/movie/{movieId}/trailer")
    Call<CMRespDto<List<String>>> trailerFindMovieId(@Path("movieId") String movieId);
    // 트레일러 하나 가져오기
    @GET("/movie/trailer/{trailerId}")
    Call<CMRespDto<TrailerRespDto>> findByTrailerId(@Path("trailerId")Long trailerId);

    @GET("/movie/{movieId}/stillcut")
    Call<CMRespDto<List<String>>> stillCutFindByMovieId(@Path("movieId") String movieId);

    @GET("/movie/boxoffice/list")
    Call<CMRespDto<List<MovieBoxOfficeRespDto>>> findBoxOfficeAll();

    @GET("/movie/{movieId}")
    Call<CMRespDto<Movie>>findById(@Path("movieId") String movieId);

    @GET("/movie/fragHome")
    Call<CMRespDto<List<AppMovieHomeRespDto>>> fragHomeData();

    @GET("/movie")
    Call<CMRespDto<List<Movie>>> findAll();

    @GET("/movie/boxoffice/{movieId}")
    Call<CMRespDto<BoxOfficeMovie>> findBoxOfficeById(@Path("movieId") String movieId);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://172.17.107.227:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
