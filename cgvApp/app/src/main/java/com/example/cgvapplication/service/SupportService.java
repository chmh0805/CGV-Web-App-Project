package com.example.cgvapplication.service;

import com.example.cgvapplication.model.faq.Faq;
import com.example.cgvapplication.model.notice.Notice;
import com.example.cgvapplication.service.dto.CMRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;
import retrofit2.http.GET;

public interface SupportService {


    @GET("/support/faq")
    Call<CMRespDto<List<Faq>>> findAllFaq();

    @GET("/support/news")
    Call<CMRespDto<List<Notice>>> findAllNotice();

    public static final Retrofit retrofit = new Retrofit.Builder()
            .baseUrl("http://172.17.107.227:8080")
            .addConverterFactory(GsonConverterFactory.create())
            .build();
}
