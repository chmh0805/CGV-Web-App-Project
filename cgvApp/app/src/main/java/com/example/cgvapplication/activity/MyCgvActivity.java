package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;


import com.example.cgvapplication.R;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.util.ArrayList;
import java.util.List;

import de.hdodenhof.circleimageview.CircleImageView;

public class MyCgvActivity extends AppCompatActivity {

    private static final String TAG = "MyCgvActivity";
    private final MyCgvActivity myCgvActivity = this;
    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private TextView mTvToolbarTitle, mTvGoPaymentHistory, mTvNickname;
    private ImageView mIvGoSawMovie, mIvGoExpectMovie;
    private CircleImageView mProfileImage;
    private List<String> mMyCgvMenu;
    private ListView mLvMyCgv;
    private ArrayAdapter<String> adapter;
    private AppCompatButton mBtnSave;

    @SuppressLint("SetTextI18n")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_cgv);
        init();
        mTvToolbarTitle.setText("My CGV");
        setSupportActionBar(mToolbarDefault);

        mMyNavigationHelper.enable(mLinearNavigation);
        mLvMyCgv.setAdapter(adapter);
        listener();

        download();
    }

    public void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTvNickname = findViewById(R.id.tv_nickname);
        mIvGoSawMovie = findViewById(R.id.iv_go_saw_movie);
        mIvGoExpectMovie = findViewById(R.id.iv_go_expect_movie);
        mTvGoPaymentHistory = findViewById(R.id.tv_go_payment_history);
        mLvMyCgv = findViewById(R.id.lv_my_cgv);
        mProfileImage = findViewById(R.id.profile_image);
        mBtnSave = findViewById(R.id.btn_save);
        mMyNavigationHelper = new MyNavigationHelper(MyCgvActivity.this);
        mMyCgvMenu = new ArrayList<>();

        mMyCgvMenu.add("자주가는 CGV");
        mMyCgvMenu.add("개인정보 관리");
        mMyCgvMenu.add("공지사항");
        mMyCgvMenu.add("고객센터");

        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, mMyCgvMenu);
        String userEntity = SharedPreference.getAttribute(myCgvActivity, "userEntity");

        Log.d(TAG, "init: UserEntity: "+userEntity);

        if(userEntity != null) {
            JsonParser jsonParser = new JsonParser();
            JsonObject jsonObject = (JsonObject) jsonParser.parse(userEntity);
            String role =  jsonObject.get("role").toString();

            Log.d(TAG, "init: role: "+ role);

            if(role.equals("\"ADMIN\"")) {
                mBtnSave.setVisibility(View.VISIBLE);
            } else {
                mBtnSave.setVisibility(View.GONE);
            }
        }

    }

    public void listener() {

        mTvGoPaymentHistory.setOnClickListener(v -> {
            Intent intent = new Intent(MyCgvActivity.this, PaymentHistoryActivity.class);
            startActivity(intent);
        });

        mIvGoSawMovie.setOnClickListener(v -> {
            int page = 1;
            Intent intent = new Intent(MyCgvActivity.this, MovieLogActivity.class);
            intent.putExtra("MovieLog", page);
            startActivity(intent);
        });

        mIvGoExpectMovie.setOnClickListener(v -> {
            Intent intent = new Intent(MyCgvActivity.this, MovieLogActivity.class);
            startActivity(intent);
        });


        mLvMyCgv.setOnItemClickListener((adapterView, view, i, l) -> {

            if(mMyCgvMenu.get(i).equals("자주가는 CGV")) {
                Intent intent = new Intent(MyCgvActivity.this, FrequentlyCgvActivity.class);
                startActivity(intent);
            }

            if(mMyCgvMenu.get(i).equals("개인정보 관리")) {
                Intent intent = new Intent(MyCgvActivity.this, PrivacyActivity.class);
                startActivity(intent);
            }

            if(mMyCgvMenu.get(i).equals("공지사항")) {
                int page = 1;
                Intent intent = new Intent(MyCgvActivity.this, ServiceCenterActivity.class);
                intent.putExtra("ServiceCenter", page);
                startActivity(intent);
            }

            if(mMyCgvMenu.get(i).equals("고객센터")) {
                int page = 0;
                Intent intent = new Intent(MyCgvActivity.this, ServiceCenterActivity.class);
                intent.putExtra("ServiceCenter", page);
                startActivity(intent);
            }
        });
        mBtnSave.setOnClickListener(view -> {
            Intent intent = new Intent(MyCgvActivity.this, MovieTalkSaveActivity.class);
            startActivity(intent);
        });
    }

    private void download() {
        Gson gson = new Gson();

        String userData = getIntent().getStringExtra("userEntity");
        User userEntity = gson.fromJson(userData, User.class);

        mTvNickname.setText(userEntity.getNickname());
    }
}