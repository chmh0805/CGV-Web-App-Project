package com.example.cgvapplication.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
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
import com.example.cgvapplication.service.dto.review.ReviewCountRespDto;
import com.example.cgvapplication.service.dto.review.ReviewFindRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragMovieDetailReview extends Fragment {

    private static final String TAG = "FragMovieDetailReview";
    public static final int REQUEST_CODE_ANOTHER = 1001;
    private MovieDetailActivity movieDetailActivity;
    private RecyclerView mRvMovieReview;
    private MovieReviewAdapter mMovieReviewAdapter;
    private List<Review> reviews;
    private TextView mTvReviewCount;
    private Button mBtnReview;
    private String movieId;
    private String title;
    private String token;
    private String review;
    private Review putReview;

    public FragMovieDetailReview(MovieDetailActivity movieDetailActivity, String movieId, String title) {
        this.movieDetailActivity = movieDetailActivity;
        this.movieId = movieId;
        this.title = title;
    }

    public FragMovieDetailReview(Review review) {
        Log.d(TAG, "FragMovieDetailReview: 여기호출");
        putReview = review;
        Log.d(TAG, "FragMovieDetailReview: review"+putReview);
    }
    public FragMovieDetailReview(){}
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_detail_review, container, false);
        if(getArguments() != null) {
            review = getArguments().getString("review");
        }
        Log.d(TAG, "onCreateView: 여기는 몇번이나?");
        init(view);

        reviewByMovieId(movieId);
        reviewCount(movieId);
        listener();
        return view;
    }

    private void init(View view) {
        mRvMovieReview = view.findViewById(R.id.rv_movie_review);
        reviews = new ArrayList<>();
        mBtnReview = view.findViewById(R.id.btn_review);
        mTvReviewCount = view.findViewById(R.id.tv_review_count);
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
                movieDetailActivity.startActivityForResult(intent, REQUEST_CODE_ANOTHER);
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
    private void reviewCount(String movieId) {
        ReviewService reviewService = ReviewService.retrofit.create(ReviewService.class);
        Call<CMRespDto<ReviewCountRespDto>> callReviewCount = reviewService.reviewCounting(movieId);
        callReviewCount.enqueue(new Callback<CMRespDto<ReviewCountRespDto>>() {
            @Override
            public void onResponse(Call<CMRespDto<ReviewCountRespDto>> call, Response<CMRespDto<ReviewCountRespDto>> response) {
                Log.d(TAG, "onResponse: "+response.body());
                ReviewCountRespDto reviewCountRespDto = response.body().getData();

                mTvReviewCount.setText(reviewCountRespDto.getCount().toString());
            }

            @Override
            public void onFailure(Call<CMRespDto<ReviewCountRespDto>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패: "+t.getMessage());
            }
        });
    }

    public void reviewReload() {
        reviewByMovieId(movieId);
        reviewCount(movieId);
    }

}
