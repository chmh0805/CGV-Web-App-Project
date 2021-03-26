package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.adapter.FrequentlyCGV.FrequentlyCGVAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

public class FrequentlyCgvActivity extends AppCompatActivity {

    private Context mContext = FrequentlyCgvActivity.this;

    private LinearLayout btnAddCGV;
    private RecyclerView rvFrequentlyCGVContainer;

    private Toolbar mToolbarFrequentlyCgv;
    private LinearLayout mLinearNavigation;
    private MyNavigationHelper mMyNavigationHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frequently_cgv);

        init();

        btnAddCGV.setOnClickListener(v -> {
            Intent intent = new Intent(FrequentlyCgvActivity.this, FrequentlyCgvViewActivity.class);
            startActivity(intent);
        });
    }

    public void init() {
        rvFrequentlyCGVContainer = findViewById(R.id.rv_frequently_cgv_container);
        btnAddCGV = findViewById(R.id.btn_add_cgv);
        mToolbarFrequentlyCgv = findViewById(R.id.toolbar_frequently_cgv);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(FrequentlyCgvActivity.this);

        setSupportActionBar(mToolbarFrequentlyCgv);
        mMyNavigationHelper.enable(mLinearNavigation);

        LinearLayoutManager manager = new LinearLayoutManager(FrequentlyCgvActivity.this, RecyclerView.VERTICAL, false);
        FrequentlyCGVAdapter adapter = new FrequentlyCGVAdapter();

        rvFrequentlyCGVContainer.setAdapter(adapter);
        rvFrequentlyCGVContainer.setLayoutManager(manager);
    }
}