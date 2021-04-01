package com.example.cgvapplication.service;

import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.expectmovie.ExpectSaveReqDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ExpectMovieService {

    @GET("/expectMovie/{id}")
    Call<CMRespDto<List<ExpectMovie>>> findAll(@Path("id") long id);

    @POST("/expectMovie")
    Call<CMRespDto<Void>> save(@Body ExpectSaveReqDto expectSaveReqDto);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://112.162.114.11:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
