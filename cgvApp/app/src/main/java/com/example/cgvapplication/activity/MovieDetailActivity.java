package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.viewpager.widget.ViewPager;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.ToggleButton;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.MovieDetailFragMentPagerAdapter;
import com.example.cgvapplication.fragment.FragMovieDetailInfo;
import com.example.cgvapplication.fragment.FragMovieDetailReview;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.service.ExpectMovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.expectmovie.ExpectSaveReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.android.material.tabs.TabLayout;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import org.json.JSONObject;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MovieDetailActivity extends AppCompatActivity {

    private static final String TAG = "MovieDetailActivity";
    private MovieDetailFragMentPagerAdapter mMovieDetailFragMentPagerAdapter;
    private ViewPager mVpMovieDetailContainer;
    private Toolbar mToolbarDefault;
    private TextView mTvToolbarTitle;
    private TabLayout mTabsMovieDetail;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private ToggleButton mIvFavorite;
    private boolean isFavorite = false;
    private final MovieDetailActivity movieDetailActivity = this;
    private String docId, docId2;
    private ExpectSaveReqDto expectSaveReqDto;
    private boolean isChecked = false;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movie_detail);
        init();
        mIvFavorite.setChecked(true);
        setSupportActionBar(mToolbarDefault);
        mMyNavigationHelper.enable(mLinearNavigation);
    }

    private void init() {
        docId = getIntent().getStringExtra("docId");
        String title = getIntent().getStringExtra("title");
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTabsMovieDetail = findViewById(R.id.tabs_movie_detail);
        mIvFavorite = findViewById(R.id.iv_favorite);
        expectSaveReqDto = new ExpectSaveReqDto();
        mTvToolbarTitle.setText(title);
        mVpMovieDetailContainer = findViewById(R.id.vp_movie_detail_container);
        mMovieDetailFragMentPagerAdapter = new MovieDetailFragMentPagerAdapter(getSupportFragmentManager(), 1);
        mMovieDetailFragMentPagerAdapter.addFragment(new FragMovieDetailInfo(movieDetailActivity, docId));
        mMovieDetailFragMentPagerAdapter.addFragment(new FragMovieDetailReview());
        mVpMovieDetailContainer.setAdapter(mMovieDetailFragMentPagerAdapter);
        mTabsMovieDetail.setupWithViewPager(mVpMovieDetailContainer);

        mTabsMovieDetail.getTabAt(0).setText("상세정보");
        mTabsMovieDetail.getTabAt(1).setText("실관람평");

        mMyNavigationHelper = new MyNavigationHelper(MovieDetailActivity.this);
        //findByMovieIdAndUserId()
        findByMovieIdAndUserId(docId, SharedPreference.getAttribute(movieDetailActivity, "Authorization"));
        //mIvFavorite.setChecked(false);
      //  mIvFavorite.
//        if(docId == docId2) {
//            mIvFavorite.setChecked(true);
//        } else {
//            mIvFavorite.setChecked(false);
//        }
        //mIvFavorite.set
        mIvFavorite.setEnabled(true);
        listener();
    }

    private void listener() {
        mIvFavorite.setOnClickListener(view -> {
            String token = SharedPreference.getAttribute(MovieDetailActivity.this, "Authorization");
            if (token == null) {
                if (!(MovieDetailActivity.this.getClass().equals(LoginActivity.class))) {
                    Intent intent = new Intent(MovieDetailActivity.this, LoginActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    startActivity(intent);
                }

            } else {
                if (mIvFavorite.isChecked()) {
                    mIvFavorite.setBackgroundDrawable(getResources().getDrawable(R.drawable.ic_favorite));
                    String userEntity = SharedPreference.getAttribute(movieDetailActivity, "userEntity");
                    JsonParser jsonParser = new JsonParser();
                    JsonObject jsonObject = (JsonObject) jsonParser.parse(userEntity);

                    expectSaveReqDto.setUserId(Long.parseLong(jsonObject.get("id").toString()));
                    expectSaveReqDto.setMovieId(docId);
                    save(expectSaveReqDto, SharedPreference.getAttribute(movieDetailActivity, "Authorization"));

                } else {
                    delete(docId, SharedPreference.getAttribute(movieDetailActivity, "Authorization"));
                    mIvFavorite.setBackgroundDrawable(getResources().getDrawable(R.drawable.ic_favorite_border));
                }
            }

        });
    }

    private void save(ExpectSaveReqDto expectSaveReqDto, String token) {
        ExpectMovieService expectMovieService = ExpectMovieService.retrofit.create(ExpectMovieService.class);
        Call<CMRespDto<ExpectMovie>> call = expectMovieService.save(token, expectSaveReqDto);
        call.enqueue(new Callback<CMRespDto<ExpectMovie>>() {
            @Override
            public void onResponse(Call<CMRespDto<ExpectMovie>> call, Response<CMRespDto<ExpectMovie>> response) {
                if (response.isSuccessful()) {
                    Log.d(TAG, "onResponse: 통신성공"+response.body());
                } else {
                    Log.d(TAG, "onResponse: 실패"+response.raw());
                }
                Log.d(TAG, "onResponse: expect: "+expectSaveReqDto.getMovieId());
            }

            @Override
            public void onFailure(Call<CMRespDto<ExpectMovie>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패"+t.getMessage());

            }
        });
    }

    private void delete( String movieId, String token) {
        ExpectMovieService expectMovieService = ExpectMovieService.retrofit.create(ExpectMovieService.class);
        Call<CMRespDto<Void>> call = expectMovieService.delete(token, movieId);
        call.enqueue(new Callback<CMRespDto<Void>>() {
            @Override
            public void onResponse(Call<CMRespDto<Void>> call, Response<CMRespDto<Void>> response) {
                Log.d(TAG, "onResponse: 통신성공"+response.toString());
            }

            @Override
            public void onFailure(Call<CMRespDto<Void>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

    }

    private void findByMovieIdAndUserId(String movieId, String token) {
        ExpectMovieService expectMovieService = ExpectMovieService.retrofit.create(ExpectMovieService.class);
        Call<CMRespDto<String>> call = expectMovieService.findBymovieIdAndUserId(token, movieId);
        call.enqueue(new Callback<CMRespDto<String>>() {
            @Override
            public void onResponse(Call<CMRespDto<String>> call, Response<CMRespDto<String>> response) {
                Log.d(TAG, "onResponse: 통신성공: 스트링"+response.body());
                if(response.body() == null) {
                    mIvFavorite.setChecked(false);
                    mIvFavorite.setBackgroundDrawable(getResources().getDrawable(R.drawable.ic_favorite_border));
                } else {
                    mIvFavorite.setBackgroundDrawable(getResources().getDrawable(R.drawable.ic_favorite));
                }

            }

            @Override
            public void onFailure(Call<CMRespDto<String>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패"+t.getMessage());
            }
        });
    }
}