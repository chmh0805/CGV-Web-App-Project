package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

public class NoticeBoxActivity extends AppCompatActivity {

    private static final String TAG = "NoticeBoxActivity";

    private RecyclerView rvNoticeBoxContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_notice_box);

        init();
    }

    private void init() {
        rvNoticeBoxContainer = findViewById(R.id.rv_notice_box_container);

        LinearLayoutManager manager = new LinearLayoutManager(NoticeBoxActivity.this, RecyclerView.VERTICAL, false);


    }
}