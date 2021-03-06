package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.movielog.MovieLogExpectAdapter;
import com.example.cgvapplication.adapter.movielog.MovieLogSawAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.ExpectMovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.Gson;
import com.makeramen.roundedimageview.RoundedImageView;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MovieLogActivity extends AppCompatActivity {

    private static final String TAG = "MovieLogActivity";

    private final MovieLogActivity movieLogActivity = this;
    private MyNavigationHelper myNavigationHelper;
    private Toolbar mToolbarMovieLog;
    private LinearLayout mLinearNavigation;

    private RoundedImageView ivMovieLogUserImg;
    private TextView tvMovieLogNickname, tvMovieLogUsername;
    private AppCompatButton btnMovieLogExpect, btnMovieLogSaw;
    private RecyclerView rvMovieLogContainer;

    private Gson gson = new Gson();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movie_log);

        init();
        listener();

        btnMovieLogExpect.setOnClickListener(v -> {
            expectMovie();
        });

        btnMovieLogSaw.setOnClickListener(v -> {
            sawMovie();
        });

    }

    private void init() {
        ivMovieLogUserImg = findViewById(R.id.iv_movie_log_user_img);
        tvMovieLogNickname = findViewById(R.id.tv_movie_log_nickname);
        tvMovieLogUsername = findViewById(R.id.tv_movie_log_username);
        btnMovieLogExpect = findViewById(R.id.btn_movie_log_expect);
        btnMovieLogSaw = findViewById(R.id.btn_movie_log_saw);
        rvMovieLogContainer = findViewById(R.id.rv_movie_log_container);

        mToolbarMovieLog = findViewById(R.id.toolbar_movie_log);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        myNavigationHelper = new MyNavigationHelper(MovieLogActivity.this);

        setSupportActionBar(mToolbarMovieLog);
        myNavigationHelper.enable(mLinearNavigation);
    }

    private void listener() {
        String userData = SharedPreference.getAttribute(MovieLogActivity.this, "userEntity");

        User userEntity = gson.fromJson(userData, User.class);

        tvMovieLogNickname.setText(userEntity.getNickname());
        tvMovieLogUsername.setText(userEntity.getUsername());

        int defaultValue = 0;
        int page = getIntent().getIntExtra("MovieLog", defaultValue);

        if (page == 0) {
            expectMovie();
        } else {
            sawMovie();
        }
    }

    public void expectMovie() {
        btnMovieLogExpect.setSelected(true);
        btnMovieLogSaw.setSelected(false);
        btnMovieLogExpect.setTextColor(getResources().getColor(R.color.black));
        btnMovieLogSaw.setTextColor(getResources().getColor(R.color.grey_dark));



        ExpectMovieService expectMovieService = ExpectMovieService.retrofit.create(ExpectMovieService.class);
        Call<CMRespDto<List<ExpectMovie>>> callExpectMovieList = expectMovieService.findByUserId(SharedPreference.getAttribute(movieLogActivity, "Authorization"));
        callExpectMovieList.enqueue(new Callback<CMRespDto<List<ExpectMovie>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<ExpectMovie>>> call, Response<CMRespDto<List<ExpectMovie>>> response) {
                Log.d(TAG, "onResponse: ????????????: ????????????: "+response.body());
                List<ExpectMovie> expectMovies = response.body().getData();
                GridLayoutManager expectMovieManager = new GridLayoutManager(MovieLogActivity.this, 2);
                MovieLogExpectAdapter expectAdapter = new MovieLogExpectAdapter(expectMovies, movieLogActivity);
                rvMovieLogContainer.setLayoutManager(expectMovieManager);
                rvMovieLogContainer.setAdapter(expectAdapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<ExpectMovie>>> call, Throwable t) {
                Log.d(TAG, "onFailure: ????????????");
            }
        });
    }

    public void sawMovie() {
        btnMovieLogExpect.setSelected(false);
        btnMovieLogSaw.setSelected(true);
        btnMovieLogExpect.setTextColor(getResources().getColor(R.color.grey_dark));
        btnMovieLogSaw.setTextColor(getResources().getColor(R.color.black));

        LinearLayoutManager sawMovieManager = new LinearLayoutManager(MovieLogActivity.this, RecyclerView.VERTICAL, false);
        MovieLogSawAdapter sawAdapter = new MovieLogSawAdapter();
        rvMovieLogContainer.setLayoutManager(sawMovieManager);
        rvMovieLogContainer.setAdapter(sawAdapter);
    }

}