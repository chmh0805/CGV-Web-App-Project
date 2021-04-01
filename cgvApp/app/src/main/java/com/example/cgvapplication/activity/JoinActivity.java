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
import com.example.cgvapplication.service.AuthService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.auth.JoinReqDto;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class JoinActivity extends AppCompatActivity {

    private static final String TAG = "JoinActivity2";

    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private TextView mTvToolbarTitle;
    private LinearLayout mLinearNavigation;
    private AppCompatButton mBtnJoin, mBtnUsernameChk;
    private TextInputEditText mEtUsername, mEtPassword, mEtPasswordChk, mEtName, mEtNickName, mEtEmail, mEtPhone;

    private boolean isUsernameChk = false;
    private JoinReqDto joinReqDto;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_join);
        init();
        mTvToolbarTitle.setText("회원가입");
        setSupportActionBar(mToolbarDefault);

        mMyNavigationHelper.enable(mLinearNavigation);

        listener();

    }

    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mBtnJoin = findViewById(R.id.btn_join);
        mBtnUsernameChk = findViewById(R.id.btn_username_chk);
        mEtUsername = findViewById(R.id.et_username);
        mEtPassword = findViewById(R.id.et_password);
        mEtPasswordChk = findViewById(R.id.et_password_chk);
        mEtName = findViewById(R.id.et_realname);
        mEtNickName = findViewById(R.id.et_nickname);
        mEtEmail = findViewById(R.id.et_email);
        mEtPhone = findViewById(R.id.et_phone);

        mMyNavigationHelper = new MyNavigationHelper(JoinActivity.this);
    }

    private void listener() {

        mBtnUsernameChk.setOnClickListener(v -> {
            String username = mEtUsername.getText().toString().trim();

            AuthService authService = AuthService.retrofit.create(AuthService.class);
            Call<CMRespDto<String>> call = authService.findByUsername(username);
            call.enqueue(new Callback<CMRespDto<String>>() {
                @Override
                public void onResponse(Call<CMRespDto<String>> call, Response<CMRespDto<String>> response) {
                    CMRespDto<String> result = response.body();
                    if(result.getData().equals("사용가능")){
                        mEtUsername.setEnabled(false);
                        isUsernameChk = true;
                        Toast.makeText(JoinActivity.this, "사용가능한 아이디 입니다", Toast.LENGTH_SHORT).show();
                    }else {
                        Toast.makeText(JoinActivity.this, "이미 사용중인 아이디 입니다.", Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<CMRespDto<String>> call, Throwable t) {

                }
            });
        });


        mBtnJoin.setOnClickListener(v -> {
            String username = mEtUsername.getText().toString().trim();
            String password = mEtPassword.getText().toString().trim();
            String passwordChk = mEtPasswordChk.getText().toString().trim();
            String name = mEtName.getText().toString().trim();
            String nickName = mEtNickName.getText().toString().trim();
            String email = mEtEmail.getText().toString().trim();
            String phone = mEtPhone.getText().toString().trim();

            if (password.equals(passwordChk)) {
                if (isUsernameChk) {
                    joinReqDto = JoinReqDto.builder()
                            .username(username)
                            .password(password)
                            .name(name)
                            .nickname(nickName)
                            .email(email)
                            .phone(phone)
                            .build();

                    AuthService authService = AuthService.retrofit.create(AuthService.class);
                    Call<CMRespDto<JoinReqDto>> call = authService.join(joinReqDto);
                    call.enqueue(new Callback<CMRespDto<JoinReqDto>>() {
                        @Override
                        public void onResponse(Call<CMRespDto<JoinReqDto>> call, Response<CMRespDto<JoinReqDto>> response) {
                            Intent intent = new Intent(JoinActivity.this, LoginActivity.class);
                            startActivity(intent);
                        }

                        @Override
                        public void onFailure(Call<CMRespDto<JoinReqDto>> call, Throwable t) {
                            t.getMessage();
                        }
                    });

                } else {
                    Toast.makeText(this, "아이디 중복확인 후 다시 이용해 주세요.", Toast.LENGTH_SHORT).show();
                }
            } else {
                Toast.makeText(this, "비밀번호와 비밀번호 확인이 일치하지 않습니다.", Toast.LENGTH_SHORT).show();
            }
            Toast.makeText(this, "회원가입에 성공하셨습니다.", Toast.LENGTH_SHORT).show();
        });
    }
}