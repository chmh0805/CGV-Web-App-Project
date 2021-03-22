package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.adapter.MovieListFragMentPagerAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.google.android.material.tabs.TabLayout;

import java.util.Objects;

public class MovieListActivity extends AppCompatActivity {

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_movie_list);
        init();
        setSupportActionBar(mToolbarDefault);
        mMyNavigationHelper.enable(mLinearNavigation);
    }

    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        ViewPager mVpMovieListContainer = findViewById(R.id.vp_movie_list_container);
        TabLayout mTabsMovieList = findViewById(R.id.tabs_movie_list);
        TextView mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTvToolbarTitle.setText("영화");
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(MovieListActivity.this);

        MovieListFragMentPagerAdapter mMovieListFragMentPagerAdapter = new MovieListFragMentPagerAdapter(getSupportFragmentManager(), 1);
        mMovieListFragMentPagerAdapter.addFragment(new FragMovieChart());
        mMovieListFragMentPagerAdapter.addFragment(new FragMovieToBeScreened());

        mVpMovieListContainer.setAdapter(mMovieListFragMentPagerAdapter);

        mTabsMovieList.setupWithViewPager(mVpMovieListContainer);

        Objects.requireNonNull(mTabsMovieList.getTabAt(0)).setText("무비차트");
        Objects.requireNonNull(mTabsMovieList.getTabAt(1)).setText("개봉예정");
    }
}