package com.example.cgvapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.widget.AppCompatButton;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.adapter.HomeFeaturedMovieAdapter;
import com.example.cgvapplication.adapter.HomeMovieListAdapter;
import com.example.cgvapplication.adapter.HomeTopFeaturedAdapter;
import com.example.cgvapplication.model.movie.featuredmovie.FeaturedMovie;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.movie.featuredmovie.TopFeaturedMovie;
import com.google.android.material.tabs.TabLayout;

import java.util.ArrayList;
import java.util.List;

public class FragHome extends Fragment {

    private List<Movie> movies = new ArrayList<>();
    private List<FeaturedMovie> featuredMovies = new ArrayList<>();
    private List<TopFeaturedMovie> topFeaturedMovies = new ArrayList<>();
    private TabLayout tlHomeMovieListTabs;
    private RecyclerView rvHomeMovieListContainer, rvHomeFeaturedMoviesContainer, rvHomeTopFeaturedContainer;
    private AppCompatButton btnHomeMovieListMovieChart, btnHomeMovieListWillScreening;
    private boolean btnMovieChartPressed, btnWillScreeningPressed;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_home, container, false);

        btnHomeMovieListMovieChart = view.findViewById(R.id.btn_home_movielist_moviechart);
        btnHomeMovieListMovieChart.setSelected(true);
        btnHomeMovieListWillScreening = view.findViewById(R.id.btn_home_movielist_willScreening);

        init(view);

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

        return view;
    }

    private void init(View view) {

        rvHomeMovieListContainer = view.findViewById(R.id.rv_home_movielist_container);
        LinearLayoutManager movieListManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        HomeMovieListAdapter movieListAdapter = new HomeMovieListAdapter(movies);
        rvHomeMovieListContainer.setLayoutManager(movieListManager);
        rvHomeMovieListContainer.setAdapter(movieListAdapter);

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
}
