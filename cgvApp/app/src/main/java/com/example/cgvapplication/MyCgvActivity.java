package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.helper.MyNavigationHelper;

import java.util.ArrayList;
import java.util.List;

public class MyCgvActivity extends AppCompatActivity {

    private static final String TAG = "MyCgvActivity";
    private Toolbar mToolbarDefault;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private TextView mTvToolbarTitle;
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
        mLvMyCgv.setOnItemClickListener((adapterView, view, i, l) -> {
            if(mMyCgvMenu.get(i).equals("개인정보 관리")) {
                Intent intent = new Intent(MyCgvActivity.this, PrivacyActivity.class);
                startActivity(intent);
            }

        });
    }
}