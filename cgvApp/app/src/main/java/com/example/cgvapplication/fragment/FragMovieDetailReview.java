package com.example.cgvapplication.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.LoginActivity;
import com.example.cgvapplication.activity.ReviewActivity;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.adapter.MovieReviewAdapter;
import com.example.cgvapplication.model.review.Review;
import com.example.cgvapplication.service.ReviewService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.review.ReviewFindRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragMovieDetailReview extends Fragment {

    private static final String TAG = "FragMovieDetailReview";
    private MovieDetailActivity movieDetailActivity;
    private RecyclerView mRvMovieReview;
    private MovieReviewAdapter mMovieReviewAdapter;
    private List<Review> reviews;
    private Button mBtnReview;
    private String movieId;
    private String title;
    private String token;
    private String review;
    private Review putReview;

    public FragMovieDetailReview(MovieDetailActivity movieDetailActivity, String movieId, String title, Review putReview) {
        this.movieDetailActivity = movieDetailActivity;
        this.movieId = movieId;
        this.title = title;
        this.putReview = putReview;
    }

    public FragMovieDetailReview() {

    }
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_detail_review, container, false);
        if(getArguments() != null) {
            review = getArguments().getString("review");
        }
        init(view);
        if(review == "review") {
            reviewByMovieId(movieId);
        }
        reviewByMovieId(movieId);
        listener();
        return view;
    }

    private void init(View view) {
        mRvMovieReview = view.findViewById(R.id.rv_movie_review);
        reviews = new ArrayList<>();
        mBtnReview = view.findViewById(R.id.btn_review);
        LinearLayoutManager manager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvMovieReview.setLayoutManager(manager);
        token = SharedPreference.getAttribute(movieDetailActivity, "Authorization");

    }

    private void listener() {
        mBtnReview.setOnClickListener(view -> {

            if (token == null) {
                if (!(movieDetailActivity.getClass().equals(LoginActivity.class))) {
                    Intent intent = new Intent(movieDetailActivity, LoginActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    movieDetailActivity.startActivity(intent);
                }
            } else {
                Intent intent = new Intent(movieDetailActivity, ReviewActivity.class);
                intent.putExtra("docId", movieId);
                intent.putExtra("title", title);
                movieDetailActivity.startActivity(intent);
            }

        });
    }

    private void reviewByMovieId(String movieId) {
        ReviewService reviewService = ReviewService.retrofit.create(ReviewService.class);
        Call<CMRespDto<List<ReviewFindRespDto>>> callReviewResp = reviewService.reviewByMovieId(movieId);
        callReviewResp.enqueue(new Callback<CMRespDto<List<ReviewFindRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<ReviewFindRespDto>>> call, Response<CMRespDto<List<ReviewFindRespDto>>> response) {
                Log.d(TAG, "onResponse: "+response.body());
                List<ReviewFindRespDto> reviewFindRespDtos = response.body().getData();
                mMovieReviewAdapter = new MovieReviewAdapter(reviewFindRespDtos);
                mMovieReviewAdapter.addItem(putReview);
                mRvMovieReview.setAdapter(mMovieReviewAdapter);

            }

            @Override
            public void onFailure(Call<CMRespDto<List<ReviewFindRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }

    @Override
    public void onResume() {
        super.onResume();
        mMovieReviewAdapter.notifyDataSetChanged();
    }
}
