package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;

import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;


import com.example.cgvapplication.helper.MyNavigationHelper;

import java.util.ArrayList;
import java.util.List;

public class MyCgvActivity extends AppCompatActivity {

    private static final String TAG = "MyCgvActivity";
    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private TextView mTvToolbarTitle, mTvGoPaymentHistory;
    private ImageView mIvGoSawMovie, mIvGoExpectMovie;
    private List<String> mMyCgvMenu;
    private ListView mLvMyCgv;
    private ArrayAdapter<String> adapter;

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
    }

    public void init() {
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mIvGoSawMovie = findViewById(R.id.iv_go_saw_movie);
        mIvGoExpectMovie = findViewById(R.id.iv_go_expect_movie);
        mTvGoPaymentHistory = findViewById(R.id.tv_go_payment_history);
        mLvMyCgv = findViewById(R.id.lv_my_cgv);
        mMyNavigationHelper = new MyNavigationHelper(MyCgvActivity.this);
        mMyCgvMenu = new ArrayList<>();

        mMyCgvMenu.add("자주가는 CGV");
        mMyCgvMenu.add("개인정보 관리");
        mMyCgvMenu.add("공지사항");
        mMyCgvMenu.add("고객센터");

        adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, mMyCgvMenu);

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
            int page = 0;
            Intent intent = new Intent(MyCgvActivity.this, MovieLogActivity.class);
            intent.putExtra("MovieLog", page);
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
    }
}