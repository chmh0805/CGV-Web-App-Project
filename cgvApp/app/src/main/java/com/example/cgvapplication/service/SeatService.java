package com.example.cgvapplication.service;

import com.example.cgvapplication.model.seat.Seat;
import com.example.cgvapplication.service.dto.CMRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface SeatService {
    @GET("/seat/hall/{hallId}/timetable/{timeTableId}")
    Call<CMRespDto<List<Seat>>> findByHallAndTimeTable(@Path("hallId") long hallId, @Path("timeTableId") long timeTableId);

    public static final Retrofit retrofit = new Retrofit.Builder()
<<<<<<< HEAD
            .baseUrl("http://172.17.107.227:8080")
=======
            .baseUrl("http://10.0.2.2:8080")
>>>>>>> master
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
