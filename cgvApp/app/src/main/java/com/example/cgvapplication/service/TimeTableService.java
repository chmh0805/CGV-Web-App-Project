package com.example.cgvapplication.service;

import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterReqDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.POST;

public interface TimeTableService {

    @POST("/timetable/app/theater")
    Call<CMRespDto<List<TimeTableTheaterRespDto>>> findAllByTheaterLocation(@Body TimeTableTheaterReqDto dto);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://112.162.114.11:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
