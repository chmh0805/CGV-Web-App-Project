package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.movielog.MovieLogExpectAdapter;
import com.example.cgvapplication.adapter.movielog.MovieLogSawAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.makeramen.roundedimageview.RoundedImageView;

public class MovieLogActivity extends AppCompatActivity {

    private static final String TAG = "MovieLogActivity";

    private MyNavigationHelper myNavigationHelper;
    private Toolbar mToolbarMovieLog;
    private LinearLayout mLinearNavigation;

    private RoundedImageView ivMovieLogUserImg;
    private TextView tvMovieLogNickname, tvMovieLogUsername;
    private AppCompatButton btnMovieLogExpect, btnMovieLogSaw;
    private RecyclerView rvMovieLogContainer;

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

        GridLayoutManager expectMovieManager = new GridLayoutManager(MovieLogActivity.this, 2);
        MovieLogExpectAdapter expectAdapter = new MovieLogExpectAdapter();
        rvMovieLogContainer.setLayoutManager(expectMovieManager);
        rvMovieLogContainer.setAdapter(expectAdapter);
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