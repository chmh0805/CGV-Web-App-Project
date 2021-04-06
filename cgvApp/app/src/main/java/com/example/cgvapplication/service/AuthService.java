package com.example.cgvapplication.service;

import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.auth.JoinReqDto;
import com.example.cgvapplication.service.dto.auth.LoginReqDto;
import com.example.cgvapplication.service.dto.user.FindPasswordRespDto;
import com.example.cgvapplication.service.dto.user.FindUsernameRespDto;
import com.example.cgvapplication.service.dto.user.UpdatePasswordReqDto;
import com.example.cgvapplication.service.dto.user.UserUpdateReqDto;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface AuthService {

    @POST("/login")
    Call<Void> login(@Body LoginReqDto loginReqDto);

    @POST("/auth/join")
    Call<CMRespDto<JoinReqDto>> join(@Body JoinReqDto joinReqDto);

    @POST("/auth/username")
    Call<CMRespDto<String>> findByUsername(@Body String username);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://192.168.137.33:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
