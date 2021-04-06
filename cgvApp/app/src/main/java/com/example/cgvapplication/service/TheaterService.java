package com.example.cgvapplication.service;

import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.theater.TheaterAreaRespDto;
import com.example.cgvapplication.service.dto.theater.TheaterNameRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface TheaterService {

    @GET("/theater")
    Call<CMRespDto<List<Theater>>> findAll();

    @GET("/theater/area")
    Call<CMRespDto<List<TheaterAreaRespDto>>> findAllArea();

    @GET("/theater/name/{area}")
    Call<CMRespDto<List<TheaterNameRespDto>>> findAllName(@Path("area") String area);

    @GET("/theater/name")
    Call<CMRespDto<List<TheaterNameRespDto>>> findAllName();

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://112.162.114.11:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
