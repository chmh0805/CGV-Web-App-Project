package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.helper.MyNavigationHelper;

public class JoinActivity extends AppCompatActivity {

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private TextView mTvToolbarTitle;
    private LinearLayout mLinearNavigation;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_join);
        init();
        mTvToolbarTitle.setText("회원가입");
        setSupportActionBar(mToolbarDefault);

        mMyNavigationHelper.enable(mLinearNavigation);

    }

    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mLinearNavigation = findViewById(R.id.linear_navigation);

        mMyNavigationHelper = new MyNavigationHelper(JoinActivity.this);
    }
}