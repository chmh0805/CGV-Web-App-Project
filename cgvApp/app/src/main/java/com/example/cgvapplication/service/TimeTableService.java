package com.example.cgvapplication.service;

import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableHallRespDto;

import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterReqDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface TimeTableService {

    @GET("/timetable/movie/{movieId}")
    Call<CMRespDto<List<TimeTable>>> findByMovieId(@Path("movieId") String movieId);

    @GET("/timetable/movie/{movieId}/theater/{theaterId}/date/{date}")
    Call<CMRespDto<List<TimeTable>>> findByAllInfos(@Path("movieId") String movieId, @Path("theaterId") long theaterId, @Path("date") String date);

    @GET("/timetable/hall/{movieId}/theater/{theaterId}/date/{date}")
    Call<CMRespDto<List<TimeTableHallRespDto>>> findHallsByMovieIdTheaterId(@Path("movieId") String movieId, @Path("theaterId") long theaterId, @Path("date") String date);

    @POST("/timetable/app/theater")
    Call<CMRespDto<List<TimeTableTheaterRespDto>>> findAllByTheaterLocation(@Body TimeTableTheaterReqDto dto);

    @GET("/timetable/app/{timeTableId}")
    Call<CMRespDto<TimeTable>> findByTimeTableId(@Path("timeTableId") long timeTableId);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://112.162.114.11:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();

}
