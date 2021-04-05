package com.example.cgvapplication.fragment;

import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatButton;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.home.HomeFeaturedMovieAdapter;
import com.example.cgvapplication.adapter.home.HomeMovieChartAdapter;
import com.example.cgvapplication.adapter.home.HomeTopFeaturedAdapter;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.AppMovieHomeRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragHome extends Fragment {

    private static final String TAG = "FragHome2";

    private final FragHome mFragHome = this;

    private List<MovieBoxOfficeRespDto> movieBoxOffices = new ArrayList<>();
    private List<AppMovieHomeRespDto> featuredMovies = new ArrayList<>();
    private RecyclerView rvHomeMovieListContainer, rvHomeFeaturedMoviesContainer, rvHomeTopFeaturedContainer;
    private AppCompatButton btnHomeMovieListMovieChart, btnHomeMovieListWillScreening;

    private boolean downloadSuccess = false;

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_home, container, false);

        btnHomeMovieListMovieChart = view.findViewById(R.id.btn_home_movielist_moviechart);
        btnHomeMovieListMovieChart.setSelected(true);
        btnHomeMovieListWillScreening = view.findViewById(R.id.btn_home_movielist_willScreening);

        init(view);
        downloadMovieChart();
        downloadFeaturedMovie();
        listener();

        return view;
    }

    private void init(View view) {

        rvHomeMovieListContainer = view.findViewById(R.id.rv_home_movielist_container);
        rvHomeFeaturedMoviesContainer = view.findViewById(R.id.rv_home_featuredMovies_container);
        rvHomeTopFeaturedContainer = view.findViewById(R.id.rv_home_top_featured_container);


    }

    private void listener() {
        btnHomeMovieListMovieChart.setOnClickListener(v -> {
            btnHomeMovieListMovieChart.setSelected(true);
            btnHomeMovieListWillScreening.setSelected(false);
            btnHomeMovieListMovieChart.setTextColor(getResources().getColor(R.color.black));
            btnHomeMovieListWillScreening.setTextColor(getResources().getColor(R.color.grey_dark));
        });

        btnHomeMovieListWillScreening.setOnClickListener(v -> {
            btnHomeMovieListWillScreening.setSelected(true);
            btnHomeMovieListMovieChart.setSelected(false);
            btnHomeMovieListWillScreening.setTextColor(getResources().getColor(R.color.black));
            btnHomeMovieListMovieChart.setTextColor(getResources().getColor(R.color.grey_dark));
        });
    }

    private void downloadMovieChart() {
        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call = movieService.findBoxOfficeAll();
        call.enqueue(new Callback<CMRespDto<List<MovieBoxOfficeRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Response<CMRespDto<List<MovieBoxOfficeRespDto>>> response) {
                CMRespDto<List<MovieBoxOfficeRespDto>> movieBoxOfficeRespDtos = response.body();
                movieBoxOffices = movieBoxOfficeRespDtos.getData();

                Log.d(TAG, "onResponse: 통신성공"+movieBoxOffices);

                LinearLayoutManager movieListManager = new LinearLayoutManager(mFragHome.getContext(), RecyclerView.HORIZONTAL, false);
                HomeMovieChartAdapter movieListAdapter = new HomeMovieChartAdapter(mFragHome.getContext(), movieBoxOffices);
                rvHomeMovieListContainer.setLayoutManager(movieListManager);
                rvHomeMovieListContainer.setAdapter(movieListAdapter);

            }

            @Override
            public void onFailure(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");

            }
        });
    }

    private void downloadFeaturedMovie() {
        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<List<AppMovieHomeRespDto>>> call = movieService.fragHomeData();
        call.enqueue(new Callback<CMRespDto<List<AppMovieHomeRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<AppMovieHomeRespDto>>> call, Response<CMRespDto<List<AppMovieHomeRespDto>>> response) {
                CMRespDto<List<AppMovieHomeRespDto>> dto = response.body();
                featuredMovies = dto.getData();

                Log.d(TAG, "onResponse: 통신성공"+featuredMovies);

                LinearLayoutManager topFeaturedManager = new LinearLayoutManager(mFragHome.getContext(), RecyclerView.HORIZONTAL, false);
                HomeTopFeaturedAdapter homeTopFeaturedAdapter = new HomeTopFeaturedAdapter(mFragHome.getContext(), featuredMovies);
                rvHomeTopFeaturedContainer.setLayoutManager(topFeaturedManager);
                rvHomeTopFeaturedContainer.setAdapter(homeTopFeaturedAdapter);

                LinearLayoutManager featuredMoviesManager = new LinearLayoutManager(mFragHome.getContext(), RecyclerView.HORIZONTAL, false);
                HomeFeaturedMovieAdapter featuredMoviesAdapter = new HomeFeaturedMovieAdapter(mFragHome.getContext(), featuredMovies);
                rvHomeFeaturedMoviesContainer.setLayoutManager(featuredMoviesManager);
                rvHomeFeaturedMoviesContainer.setAdapter(featuredMoviesAdapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<AppMovieHomeRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

    }
}
