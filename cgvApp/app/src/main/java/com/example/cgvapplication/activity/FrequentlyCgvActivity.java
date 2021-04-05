package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.FrequentlyCGV.FrequentlyCGVAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.util.Objects;

public class FrequentlyCgvActivity extends AppCompatActivity {

    private Context mContext = FrequentlyCgvActivity.this;

    private LinearLayout btnAddCGV;
    private RecyclerView rvFrequentlyCGVContainer;

    private Toolbar mToolbarFrequentlyCgv;
    private LinearLayout mLinearNavigation;
    private MyNavigationHelper mMyNavigationHelper;

    private BottomSheetDialog mBottomSheetDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frequently_cgv);

        init();

        btnAddCGV.setOnClickListener(v -> {
            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(FrequentlyCgvActivity.this));
            @SuppressLint("InflateParams")View view = getLayoutInflater().inflate(R.layout.frequently_cgv_bottom_sheet, null);
            mBottomSheetDialog.setContentView(view);
            mBottomSheetDialog.show();
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