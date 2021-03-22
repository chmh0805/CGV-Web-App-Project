package com.example.cgvapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.adapter.MovieListAdapter;

public class FragMovieChart extends Fragment {
    private final FragMovieChart mFragMovieChart = this;

    private final MovieListAdapter mMovieListAdapter = new MovieListAdapter();
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_chart, container, false);
        init(view);
        return view;
    }

    private void init(View view) {
        RecyclerView mRvMovieChartList = view.findViewById(R.id.rv_movie_list);
        LinearLayoutManager manager = new LinearLayoutManager(mFragMovieChart.getContext(), RecyclerView.VERTICAL, false);
        mRvMovieChartList.setLayoutManager(manager);
        mRvMovieChartList.setAdapter(mMovieListAdapter);
    }
}
