package com.example.cgvapplication.fragment;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatButton;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.movietalk.MovieTalkAdapter;
import com.example.cgvapplication.model.movietalk.MovieTalk;
import com.example.cgvapplication.service.MovieTalkService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragMovieTalk extends Fragment {

    private static final String TAG = "FragMovieTalk";
    private final FragMovieTalk fragMovieTalk = this;
    private List<MovieTalk> movieTalkList;
    private RecyclerView rvMovieTalkContainer;
    private ConstraintLayout mClMovieTalkUerInfo;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movietalk, container, false);

        init(view);
        findAll(view);
        return view;
    }

    private void init(View view) {
        rvMovieTalkContainer = view.findViewById(R.id.rv_movietalk_container);
        mClMovieTalkUerInfo = view.findViewById(R.id.cl_movietalk_userInfo);
    }

    private void findAll(View view) {
        MovieTalkService movieTalkService = MovieTalkService.retrofit.create(MovieTalkService.class);
        Call<CMRespDto<List<MovieTalk>>> movieTalkCall = movieTalkService.findAll();
        movieTalkCall.enqueue(new Callback<CMRespDto<List<MovieTalk>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<MovieTalk>>> call, Response<CMRespDto<List<MovieTalk>>> response) {
                Log.d(TAG, "onResponse: "+response.body());
                movieTalkList = response.body().getData();
                LinearLayoutManager movieTalkManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
                MovieTalkAdapter movieTalkAdapter = new MovieTalkAdapter(movieTalkList);
                rvMovieTalkContainer.setLayoutManager(movieTalkManager);
                rvMovieTalkContainer.setAdapter(movieTalkAdapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<MovieTalk>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }
}
