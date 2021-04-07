package com.example.cgvapplication.service;

import com.example.cgvapplication.service.dto.CMRespDto;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.DELETE;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface FrequentlyCgvService {
    @POST("/frequentlycgv/{theaterId}")
    Call<CMRespDto<Void>> saveFrequentlyCgv(@Path("theaterId") long theaterId, @Header("Authorization") String token);

    @DELETE("/frequentlycgv/{id}")
    Call<CMRespDto<Void>> deleteById(@Header("Authorization") String token, @Path("id") long id);

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://113.198.238.134:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
