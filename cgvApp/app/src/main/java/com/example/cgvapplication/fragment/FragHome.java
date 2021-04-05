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
import com.example.cgvapplication.model.movie.featuredmovie.FeaturedMovie;
import com.example.cgvapplication.model.movie.featuredmovie.TopFeaturedMovie;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragHome extends Fragment {

    private static final String TAG = "FragHome2";

    private List<MovieBoxOfficeRespDto> moviesBoxOffice;
    
    private final FragHome mFragHome = this;

    private List<FeaturedMovie> featuredMovies = new ArrayList<>();
    private List<TopFeaturedMovie> topFeaturedMovies = new ArrayList<>();
    private RecyclerView rvHomeMovieListContainer, rvHomeFeaturedMoviesContainer, rvHomeTopFeaturedContainer;
    private AppCompatButton btnHomeMovieListMovieChart, btnHomeMovieListWillScreening;

    private Gson gson = new Gson();

    public FragHome(List<MovieBoxOfficeRespDto> moviesBoxOffice) {
        this.moviesBoxOffice = moviesBoxOffice;
    }

    public FragHome() {

    }


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_home, container, false);

//        btnHomeMovieListMovieChart = view.findViewById(R.id.btn_home_movielist_moviechart);
//        btnHomeMovieListMovieChart.setSelected(true);
//        btnHomeMovieListWillScreening = view.findViewById(R.id.btn_home_movielist_willScreening);
//
//        List<String> jsonDatas = getArguments().getStringArrayList("jsonDatas");
//        for (String jsonData : jsonDatas) {
//            MovieBoxOfficeRespDto dto = gson.fromJson(jsonData, MovieBoxOfficeRespDto.class);
//            moviesBoxOffice.add(dto);
//        }
//
//        Log.d(TAG, "onCreateView: "+moviesBoxOffice);
//
        init(view);
      //  listener();
        movieChart(view);
       download();
        return view;
    }

    private void init(View view) {

//        List<String> jsonDatas = getArguments().getStringArrayList("moviesBoxOffice");
//        for (String jsonData : jsonDatas) {
//            MovieBoxOfficeRespDto movieBoxOffice = gson.fromJson(jsonData, MovieBoxOfficeRespDto.class);
//
//            moviesBoxOffice.add(movieBoxOffice);
//        }

        rvHomeMovieListContainer = view.findViewById(R.id.rv_home_movielist_container);


        rvHomeFeaturedMoviesContainer = view.findViewById(R.id.rv_home_featuredMovies_container);
        LinearLayoutManager featuredMoviesManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        HomeFeaturedMovieAdapter featuredMoviesAdapter = new HomeFeaturedMovieAdapter(featuredMovies);
        rvHomeFeaturedMoviesContainer.setLayoutManager(featuredMoviesManager);
        rvHomeFeaturedMoviesContainer.setAdapter(featuredMoviesAdapter);

        rvHomeTopFeaturedContainer = view.findViewById(R.id.rv_home_top_featured_container);
        LinearLayoutManager topFeaturedManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        HomeTopFeaturedAdapter homeTopFeaturedAdapter = new HomeTopFeaturedAdapter(topFeaturedMovies);
        rvHomeTopFeaturedContainer.setLayoutManager(topFeaturedManager);
        rvHomeTopFeaturedContainer.setAdapter(homeTopFeaturedAdapter);

    }

    private void listener() {
        btnHomeMovieListMovieChart.setOnClickListener(v -> {
            btnHomeMovieListMovieChart.setSelected(true);
            btnHomeMovieListWillScreening.setSelected(false);
            btnHomeMovieListMovieChart.setTextColor(getResources().getColor(R.color.black));
            btnHomeMovieListWillScreening.setTextColor(getResources().getColor(R.color.grey_dark));
            movieChart(v);
        });

        btnHomeMovieListWillScreening.setOnClickListener(v -> {
            btnHomeMovieListWillScreening.setSelected(true);
            btnHomeMovieListMovieChart.setSelected(false);
            btnHomeMovieListWillScreening.setTextColor(getResources().getColor(R.color.black));
            btnHomeMovieListMovieChart.setTextColor(getResources().getColor(R.color.grey_dark));
        });
    }

    public void movieChart(View view) {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        LinearLayoutManager movieListManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        HomeMovieChartAdapter movieListAdapter = new HomeMovieChartAdapter(mFragHome.getContext(), moviesBoxOffice);
        rvHomeMovieListContainer.setLayoutManager(movieListManager);
        rvHomeMovieListContainer.setAdapter(movieListAdapter);
    }

    public void willScreening() {

    }

    private void download() {
        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call = movieService.findBoxOfficeAll();
        call.enqueue(new Callback<CMRespDto<List<MovieBoxOfficeRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Response<CMRespDto<List<MovieBoxOfficeRespDto>>> response) {
                CMRespDto<List<MovieBoxOfficeRespDto>> movieBoxOfficeRespDtos = response.body();
                Log.d(TAG, "onResponse: 통신성공"+movieBoxOfficeRespDtos);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }
}
