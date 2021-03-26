package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.adapter.noticebox.NoticeBoxAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

public class NoticeBoxActivity extends AppCompatActivity {

    private static final String TAG = "NoticeBoxActivity";

    private Toolbar mToolbarNoticeBox;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;

    private RecyclerView rvNoticeBoxContainer;
    private NoticeBoxAdapter noticeBoxAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notice_box);

        init();
    }

    private void init() {
        rvNoticeBoxContainer = findViewById(R.id.rv_notice_box_container);

        mToolbarNoticeBox = findViewById(R.id.toolbar_default);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(NoticeBoxActivity.this);

        setSupportActionBar(mToolbarNoticeBox);
        mMyNavigationHelper.enable(mLinearNavigation);


        LinearLayoutManager manager = new LinearLayoutManager(NoticeBoxActivity.this, RecyclerView.VERTICAL, false);
        noticeBoxAdapter = new NoticeBoxAdapter();

        rvNoticeBoxContainer.setLayoutManager(manager);
        rvNoticeBoxContainer.setAdapter(noticeBoxAdapter);
    }
}