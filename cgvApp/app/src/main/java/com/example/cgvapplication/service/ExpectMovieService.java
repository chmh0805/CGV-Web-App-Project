package com.example.cgvapplication.service;

import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.expectmovie.ExpectSaveReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;

import java.util.List;

import lombok.Generated;
import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface ExpectMovieService {

    @GET("/expectMovie/{id}")
    Call<CMRespDto<List<ExpectMovie>>> findAll(@Path("id") long id);

    @POST("/expectMovie")
    Call<CMRespDto<ExpectMovie>> save(@Header("Authorization") String token, @Body ExpectSaveReqDto expectSaveReqDto);

    @DELETE("/expectMovie/{movieId}")
    Call<CMRespDto<Void>> delete(@Header("Authorization") String token, @Path("movieId") String movieId);

    @GET("/expectMovie/{movieId}")
    Call<CMRespDto<String>> findBymovieIdAndUserId(@Header("Authorization") String token, @Path("movieId") String movieId);

    @GET("/expectMovie")
    Call<CMRespDto<List<ExpectMovie>>> findByUserId(@Header("Authorization") String token);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://10.0.2.2:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
