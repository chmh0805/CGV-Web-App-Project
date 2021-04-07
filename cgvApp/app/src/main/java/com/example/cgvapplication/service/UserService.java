package com.example.cgvapplication.service;

import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.user.DeleteUserReqDto;
import com.example.cgvapplication.service.dto.user.FindPasswordRespDto;
import com.example.cgvapplication.service.dto.user.FindUsernameRespDto;
import com.example.cgvapplication.service.dto.user.UpdatePasswordReqDto;
import com.example.cgvapplication.service.dto.user.UserUpdateReqDto;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.HTTP;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.PUT;

public interface UserService {

    @POST("/findUsername")
    Call<CMRespDto<String>> findUsername(@Body FindUsernameRespDto fIndPasswordRespDto);

    @POST("/findPassword")
    Call<CMRespDto<FindPasswordRespDto>> findPassword(@Body FindPasswordRespDto fIndPasswordRespDto);

    @PUT("/changePassword")
    Call<CMRespDto<UpdatePasswordReqDto>> changePassword(@Body UpdatePasswordReqDto updatePasswordReqDto);

    @GET("/user")
    Call<CMRespDto<User>> findById(@Header("Authorization") String authHeader);

    @PUT("/user")
    Call<CMRespDto<User>> updateById(@Header("Authorization") String jwtToken, @Body UserUpdateReqDto userUpdateReqDto);

    @HTTP(method = "DELETE", hasBody = true, path = "/user")
    Call<CMRespDto<Void>> deleteById(@Header("Authorization") String jwtToken, @Body DeleteUserReqDto deleteUserReqDto);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://113.198.238.134:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
