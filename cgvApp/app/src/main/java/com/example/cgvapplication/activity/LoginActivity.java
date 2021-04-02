package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.AuthService;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.example.cgvapplication.service.dto.auth.LoginReqDto;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class LoginActivity extends AppCompatActivity {

    private static final String TAG = "LoginActivity";

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private TextView mTvToolbarTitle, mTvGoJoin, mTvSearchId;
    private TextInputEditText mEtUsername, mEtPassword;

    private AppCompatButton mBtnLogin;

    private User uesrEntity;

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
        mEtUsername = findViewById(R.id.et_username);
        mEtPassword = findViewById(R.id.et_password);
        mBtnLogin = findViewById(R.id.btn_login);
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

        mBtnLogin.setOnClickListener(v -> {
            LoginReqDto loginReqDto = new LoginReqDto();
            String username = mEtUsername.getText().toString();
            String password = mEtPassword.getText().toString();

            loginReqDto.setUsername(username);
            loginReqDto.setPassword(password);

            login(loginReqDto);
        });
    }

    private void login(LoginReqDto loginReqDto) {

        AuthService authService = AuthService.retrofit.create(AuthService.class);
        Call<Void> callToken = authService.login(loginReqDto);

        callToken.enqueue(new Callback<Void>() {
            @Override
            public void onResponse(Call<Void> call, Response<Void> response) {
                String accessToken = response.headers().get("Authorization");
                Log.d(TAG, "onResponse: " + accessToken);

                SharedPreference.setAttribute(LoginActivity.this, "Authorization", accessToken);

                Intent intent = new Intent(LoginActivity.this, MainActivity.class);
                startActivity(intent);
            }

            @Override
            public void onFailure(Call<Void> call, Throwable t) {
                Toast.makeText(LoginActivity.this, "로그인 실패", Toast.LENGTH_SHORT);
            }
        });

        finish();
    }
}