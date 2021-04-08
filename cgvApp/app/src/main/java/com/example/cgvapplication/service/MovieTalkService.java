package com.example.cgvapplication.service;

import com.example.cgvapplication.model.movietalk.MovieTalk;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movietalk.MovieTalkSaveReqDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface MovieTalkService {
    @POST("/movieTalk")
    Call<CMRespDto<MovieTalk>> save(@Body MovieTalkSaveReqDto movieTalkSaveReqDto);

    @GET("/movieTalk")
    Call<CMRespDto<List<MovieTalk>>> findAll();

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://172.17.107.227:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
