package com.example.cgvapplication.fragment;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.MovieReviewAdapter;
import com.example.cgvapplication.model.movie.Review;

import java.util.ArrayList;
import java.util.List;

public class FragMovieDetailReview extends Fragment {

    private RecyclerView mRvMovieReview;
    private MovieReviewAdapter mMovieReviewAdapter;
    private List<Review> reviews;


    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_detail_review, container, false);


        init(view);
        reviews.add(new Review(0, "별루에요!", "그저 그랬음..", false));
        for (int i=1; i<50; i++) {
            reviews.add(new Review(i, "좋았어요!", "엄청 좋았어요! 잼", true));
        }
        mMovieReviewAdapter = new MovieReviewAdapter(reviews);
        mRvMovieReview.setAdapter(mMovieReviewAdapter);
        return view;
    }

    private void init(View view) {
        mRvMovieReview = view.findViewById(R.id.rv_movie_review);
        reviews = new ArrayList<>();
        LinearLayoutManager manager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvMovieReview.setLayoutManager(manager);

    }
}
