package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.adapter.SearchIdAndPwdFragMentPagerAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.google.android.material.tabs.TabLayout;

import java.util.Objects;

public class FindIdAndPasswordActivity extends AppCompatActivity {

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_id_and_password);
        init();
        setSupportActionBar(mToolbarDefault);
        mMyNavigationHelper.enable(mLinearNavigation);
    }

    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        ViewPager mVpMovieIdPasswordContainer = findViewById(R.id.vp_movie_id_password_container);
        TextView mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        TabLayout mTabsIdPassword = findViewById(R.id.tabs_id_password);
        mTvToolbarTitle.setText("아이디/비밀번호 찾기");
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(FindIdAndPasswordActivity.this);

        SearchIdAndPwdFragMentPagerAdapter mSearchIdAndPwdFragMentPagerAdapter = new SearchIdAndPwdFragMentPagerAdapter(getSupportFragmentManager(), 1);
        mSearchIdAndPwdFragMentPagerAdapter.addFragment(new FragSearchId());
        mSearchIdAndPwdFragMentPagerAdapter.addFragment(new FragSearchPassword());

        mVpMovieIdPasswordContainer.setAdapter(mSearchIdAndPwdFragMentPagerAdapter);
        mTabsIdPassword.setupWithViewPager(mVpMovieIdPasswordContainer);

        Objects.requireNonNull(mTabsIdPassword.getTabAt(0)).setText("아이디 찾기");
        Objects.requireNonNull(mTabsIdPassword.getTabAt(1)).setText("비밀번호 찾기");


    }
}