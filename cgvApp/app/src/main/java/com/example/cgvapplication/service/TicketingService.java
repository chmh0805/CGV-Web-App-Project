package com.example.cgvapplication.service;

import com.example.cgvapplication.model.ticketing.Ticketing;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.ticketing.TicketingSaveReqDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface TicketingService {

    @POST("/ticketing")
    Call<CMRespDto<Void>> save(@Body TicketingSaveReqDto ticketingSaveReqDto);

    @GET("/ticketing/user/{userId}")
    Call<CMRespDto<List<Ticketing>>> findByUserId(@Path("userId") long userId);

    @GET("/ticketing/{timeTableId}")
    Call<CMRespDto<Long>> findByTimeTableId(@Path("timeTableId") long timeTableId);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://10.0.2.2:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
