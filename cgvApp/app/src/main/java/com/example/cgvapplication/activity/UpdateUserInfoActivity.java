package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.UserService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.user.UserUpdateReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.android.material.textfield.TextInputEditText;
import com.google.gson.Gson;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class UpdateUserInfoActivity extends AppCompatActivity {

    private static final String TAG = "UpdateUserInfoActivity2";

    private Toolbar mToolbarUpdate;
    private AppCompatButton mBtnUpdate;
    private TextInputEditText mEtUsername, mEtPassword, mEtName, mEtNickName, mEtEmail, mEtPhone;
    private ImageView mIvBack;

    private Gson gson = new Gson();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_update_user_info);

        init();
        listener();
        setSupportActionBar(mToolbarUpdate);
    }

    private void init() {
        mIvBack = findViewById(R.id.iv_back);
        mToolbarUpdate = findViewById(R.id.toolbar_update);
        mBtnUpdate = findViewById(R.id.btn_update);
        mEtUsername = findViewById(R.id.et_username);
        mEtPassword = findViewById(R.id.et_password);
        mEtName = findViewById(R.id.et_realname);
        mEtNickName = findViewById(R.id.et_nickname);
        mEtEmail = findViewById(R.id.et_email);
        mEtPhone = findViewById(R.id.et_phone);

        String userData = SharedPreference.getAttribute(UpdateUserInfoActivity.this, "userEntity");
        User userEntity = gson.fromJson(userData, User.class);

        mEtUsername.setText(userEntity.getUsername());
        mEtName.setText(userEntity.getName());
        mEtNickName.setText(userEntity.getNickname());
        mEtEmail.setText(userEntity.getEmail());
        mEtPhone.setText(userEntity.getPhone());
    }

    private void listener() {
        mIvBack.setOnClickListener(v -> {
            finish();
        });

        mBtnUpdate.setOnClickListener(v -> {
            update();
        });
    }

    private void update() {
        String nickname = mEtNickName.getText().toString();
        String password = mEtPassword.getText().toString();
        String email = mEtEmail.getText().toString();
        String phone = mEtPhone.getText().toString();

        if (password.isEmpty()) {
            Toast.makeText(this, "비밀번호를 입력하세요.", Toast.LENGTH_SHORT).show();
        } else {
            UserUpdateReqDto dto = new UserUpdateReqDto(nickname, password, email, phone);

            String jwtToken = SharedPreference.getAttribute(UpdateUserInfoActivity.this, "Authorization");
            Log.d(TAG, "update: " + jwtToken);

            UserService userService = UserService.retrofit.create(UserService.class);
            Call<CMRespDto<User>> call = userService.updateById(jwtToken, dto);

            call.enqueue(new Callback<CMRespDto<User>>() {
                @Override
                public void onResponse(Call<CMRespDto<User>> call, Response<CMRespDto<User>> response) {
                    CMRespDto<User> dto = response.body();
                    Log.d(TAG, "onResponse: "+dto);
                    User userData = dto.getData();
                    String userEntity = gson.toJson(userData);
                    SharedPreference.setAttribute(UpdateUserInfoActivity.this, "userEntity", userEntity);
                    Log.d(TAG, "onResponse: 통신 성공 - "+userEntity);

                    finish();
                }

                @Override
                public void onFailure(Call<CMRespDto<User>> call, Throwable t) {
                    Log.d(TAG, "onFailure: 통신 실패");
                }
            });
        }
    }
}