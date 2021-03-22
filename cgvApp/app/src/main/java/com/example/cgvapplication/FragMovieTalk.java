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

import com.example.cgvapplication.adapter.movietalk.MovieTalkAdapter;
import com.example.cgvapplication.model.movie.movietalk.MovieTalk;

import java.util.ArrayList;
import java.util.List;

public class FragMovieTalk extends Fragment {

    private static final String TAG = "FragMovieTalk";
    private List<MovieTalk> movieTalkList = new ArrayList<>();

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movietalk, container, false);

        init(view);

        return view;
    }

    private void init(View view) {
        RecyclerView rvMovieTalkContainer = view.findViewById(R.id.rv_movietalk_container);
        LinearLayoutManager movieTalkManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        MovieTalkAdapter movieTalkAdapter = new MovieTalkAdapter(movieTalkList);
        rvMovieTalkContainer.setLayoutManager(movieTalkManager);
        rvMovieTalkContainer.setAdapter(movieTalkAdapter);
    }
}
