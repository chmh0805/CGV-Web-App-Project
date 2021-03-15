package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;

import com.example.cgvapplication.helper.MyNavigationHelper;

public class LoginActivity extends AppCompatActivity {

    private static final String TAG = "LoginActivity";

    private Toolbar mToolbarLogin;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
        init();
        Log.d(TAG, "onCreate: "+mLinearNavigation);
        mMyNavigationHelper.enable(mLinearNavigation);
        setSupportActionBar(mToolbarLogin);


    }

    private void init() {
        mToolbarLogin = findViewById(R.id.toolbar_login);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        Log.d(TAG, "init: "+mLinearNavigation);
        mMyNavigationHelper = new MyNavigationHelper(LoginActivity.this);
    }
}