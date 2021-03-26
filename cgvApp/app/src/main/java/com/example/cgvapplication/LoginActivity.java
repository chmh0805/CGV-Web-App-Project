package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.helper.MyNavigationHelper;
public class LoginActivity extends AppCompatActivity {

    private static final String TAG = "LoginActivity";

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private TextView mTvToolbarTitle, mTvGoJoin, mTvSearchId;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        init();
        listener();

        mTvToolbarTitle.setText("로그인");
        setSupportActionBar(mToolbarDefault);

        mMyNavigationHelper.enable(mLinearNavigation);

    }

    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTvGoJoin = findViewById(R.id.tv_go_join);
        mTvSearchId = findViewById(R.id.tv_search_id);
        mMyNavigationHelper = new MyNavigationHelper(LoginActivity.this);
    }

    private void listener() {
        mTvGoJoin.setOnClickListener(view -> {
            Intent intent = new Intent(LoginActivity.this, JoinActivity.class);
            startActivity(intent);
        });
        mTvSearchId.setOnClickListener(view -> {
            Intent intent = new Intent(LoginActivity.this, FindIdAndPasswordActivity.class);
            startActivity(intent);
        });
    }
}