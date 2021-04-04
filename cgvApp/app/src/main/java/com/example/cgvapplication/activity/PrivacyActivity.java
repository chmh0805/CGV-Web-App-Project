 package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.constraintlayout.widget.ConstraintLayout;

import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.service.UserService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.user.DeleteUserReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PrivacyActivity extends AppCompatActivity {

    private static final String TAG = "PrivacyActivity2";

    private Toolbar mToolbarDefault;

    private TextView mTvDeleteUserInfo, mTvUpdateUserInfo;

    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private AppCompatButton mBtnLogout;

    private String result = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_privacy);
        init();
        listener();
        setSupportActionBar(mToolbarDefault);
        mMyNavigationHelper.enable(mLinearNavigation);
    }
    private void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        TextView mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTvToolbarTitle.setText("개인정보 관리");
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(PrivacyActivity.this);

        mTvDeleteUserInfo = findViewById(R.id.tv_delete_user_info);
        mTvUpdateUserInfo = findViewById(R.id.tv_update_user_info);
        mBtnLogout = findViewById(R.id.btn_logout);
    }

    private void listener() {

        mTvUpdateUserInfo.setOnClickListener(v -> {
            Intent intent = new Intent(PrivacyActivity.this, UpdateUserInfoActivity.class);
            startActivity(intent);
        });

        mTvDeleteUserInfo.setOnClickListener(v -> {
            View dialog = LayoutInflater.from(PrivacyActivity.this).inflate(R.layout.dialog_delete_user_info, null);

            AppCompatButton mBtnDeleteUser = dialog.findViewById(R.id.btn_delete_user);
            AppCompatButton mBtnCancel = dialog.findViewById(R.id.btn_cancel);
            TextInputEditText mEtDeletePassword = dialog.findViewById(R.id.et_delete_password);

            AlertDialog.Builder dlg = new AlertDialog.Builder(PrivacyActivity.this);

            dlg.setView(dialog);

            dlg.show();

            mBtnDeleteUser.setOnClickListener(v1 -> {
                String jwtToken = SharedPreference.getAttribute(PrivacyActivity.this, "Authorization");

                String password = mEtDeletePassword.getText().toString();
                DeleteUserReqDto dto = new DeleteUserReqDto(password);

                UserService userService = UserService.retrofit.create(UserService.class);
                Call<CMRespDto<Void>> call = userService.deleteById(jwtToken, dto);
                call.enqueue(new Callback<CMRespDto<Void>>() {
                    @Override
                    public void onResponse(Call<CMRespDto<Void>> call, Response<CMRespDto<Void>> response) {
                        CMRespDto<Void> result = response.body();
                        if(result.getStatusCode() == 1) {
                            SharedPreference.removeAllAttribute(PrivacyActivity.this);
                            Intent intent = new Intent(PrivacyActivity.this, MainActivity.class);
                            startActivity(intent);
                        } else {
                            Toast.makeText(PrivacyActivity.this, "비밀번호가 틀렸습니다. 확인 후 다시 이용해 주십시오.", Toast.LENGTH_SHORT).show();
                        }
                    }
                    @Override
                    public void onFailure(Call<CMRespDto<Void>> call, Throwable t) {

                    }
                });

                finish();
            });

            mBtnCancel.setOnClickListener(v1 -> {
                finish();
            });
        });

        mBtnLogout.setOnClickListener(v -> {
            TextView mTvGoLogin;
            ConstraintLayout mClProfile;

            mClProfile = findViewById(R.id.cl_profile);
            mTvGoLogin = findViewById(R.id.tv_go_login);

            SharedPreference.removeAllAttribute(PrivacyActivity.this);
            mClProfile.setVisibility(View.GONE);
            mTvGoLogin.setVisibility(View.VISIBLE);
            finish();
            Intent intent = new Intent(PrivacyActivity.this, MainActivity.class);
            startActivity(intent);
        });
    }
}