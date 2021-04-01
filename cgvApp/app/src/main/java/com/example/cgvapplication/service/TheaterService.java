package com.example.cgvapplication.service;

import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.dto.CMRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface TheaterService {

    @GET("/theater")
    Call<CMRespDto<List<Theater>>> findAll();

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://112.162.114.11:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
