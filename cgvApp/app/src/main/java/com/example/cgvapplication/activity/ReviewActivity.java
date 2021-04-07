package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.MovieReviewAdapter;
import com.example.cgvapplication.fragment.FragMovieDetailReview;
import com.example.cgvapplication.model.review.Review;
import com.example.cgvapplication.service.ReviewService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.review.ReviewFindRespDto;
import com.example.cgvapplication.service.dto.review.ReviewSaveReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ReviewActivity extends AppCompatActivity {

    private static final String TAG = "ReviewActivity";
    private final ReviewActivity reviewActivity = this;
    private Toolbar mToolbarReview;
    private ImageView mIvBack;
    private TextView mTvTitle;
    private EditText mEtContent;
    private RadioButton mBtnGood, mBtnBad;
    private MovieReviewAdapter movieReviewAdapter;
    private Button mBtnSet;
    private String docId;
    private Review review = new Review();
    private boolean isSuccess = false;
    private RecyclerView mRvMovieReview;
    //private FragMovieDetailReview fragMovieDetailReview = new FragMovieDetailReview();
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_review);
        init();
        setSupportActionBar(mToolbarReview);
        listener();

    }

    private void init() {
        docId = getIntent().getStringExtra("docId");
        String title = getIntent().getStringExtra("title");
        Log.d(TAG, "init: title: "+title);
        Log.d(TAG, "init: title: "+title);
        mToolbarReview = findViewById(R.id.toolbar_review);
        mIvBack = findViewById(R.id.iv_back);
        mTvTitle = findViewById(R.id.tv_toolbar_title_review);
        mEtContent = findViewById(R.id.et_content);
        mBtnGood = findViewById(R.id.btn_good);
        mBtnBad = findViewById(R.id.btn_bad);
        mTvTitle.setText(title);
        mBtnSet = findViewById(R.id.btn_set);
        movieReviewAdapter = new MovieReviewAdapter();
        ReviewSaveReqDto reviewSaveReqDto = new ReviewSaveReqDto();

        String userEntity = SharedPreference.getAttribute(reviewActivity, "userEntity");
        if(userEntity != null) {
            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = (JsonObject) jsonParser.parse(userEntity);
            mBtnSet.setOnClickListener(view -> {
                reviewSaveReqDto.setContent(mEtContent.getText().toString());
                if(mBtnBad.isChecked()) reviewSaveReqDto.setIsLike(0);
                else if(mBtnGood.isChecked()) reviewSaveReqDto.setIsLike(1);
                reviewSaveReqDto.setMovieId(docId);
                reviewSaveReqDto.setUserId(Long.parseLong(jsonObject.get("id").toString()));
                save(reviewSaveReqDto);
            });
        }



    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });



    }

    private void save(ReviewSaveReqDto reviewSaveReqDto) {
        Log.d(TAG, "save: "+reviewSaveReqDto.getContent());
        ReviewService reviewService = ReviewService.retrofit.create(ReviewService.class);
        Call<CMRespDto<Review>> callReview = reviewService.save(SharedPreference.getAttribute(reviewActivity, "Authorization"), reviewSaveReqDto);
        callReview.enqueue(new Callback<CMRespDto<Review>>() {
            @Override
            public void onResponse(Call<CMRespDto<Review>> call, Response<CMRespDto<Review>> response) {
                if(response.isSuccessful()) {
                    Toast.makeText(reviewActivity, "성공적으로 작성되었습니다. ", Toast.LENGTH_SHORT).show();
                    review = response.body().getData();
                    Intent resultIntent = new Intent();
                    resultIntent.putExtra("review", review);
                    setResult(RESULT_OK, resultIntent);
                    finish();
                }
                Log.d(TAG, "onResponse: response" + response);
            }

            @Override
            public void onFailure(Call<CMRespDto<Review>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패"+t.getMessage());
            }
        });

    }

}