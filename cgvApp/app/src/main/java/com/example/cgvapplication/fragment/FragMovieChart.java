package com.example.cgvapplication.fragment;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieListActivity;
import com.example.cgvapplication.adapter.MovieListAdapter;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragMovieChart extends Fragment {
    private static final String TAG = "FragMovieChart";
    private final FragMovieChart mFragMovieChart = this;
    private final MovieListActivity movieListActivity;
    private MovieListAdapter mMovieListAdapter;
    private  RecyclerView mRvMovieChartList;

    public FragMovieChart(MovieListActivity movieListActivity) {
        this.movieListActivity = movieListActivity;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_chart, container, false);
        init(view);
        download();
        return view;
    }

    private void init(View view) {
        mRvMovieChartList = view.findViewById(R.id.rv_movie_list);
        mMovieListAdapter = new MovieListAdapter(movieListActivity);

    }

    private void download() {

        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call = movieService.findBoxOfficeAll();
        call.enqueue(new Callback<CMRespDto<List<MovieBoxOfficeRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Response<CMRespDto<List<MovieBoxOfficeRespDto>>> response) {
                CMRespDto<List<MovieBoxOfficeRespDto>> movieBoxOfficeRespDtos = response.body();
                mMovieListAdapter.setBoxOfficeRespDtos(movieBoxOfficeRespDtos.getData());
                LinearLayoutManager manager = new LinearLayoutManager(mFragMovieChart.getContext(), RecyclerView.VERTICAL, false);
                mRvMovieChartList.setLayoutManager(manager);
                mRvMovieChartList.setAdapter(mMovieListAdapter);
                Log.d(TAG, "onResponse: 통신성공" + movieBoxOfficeRespDtos.getData());
            }

            @Override
            public void onFailure(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

    }
}
