package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.adapter.FrequentlyCGV.FrequentlyCGVAdapter;

public class FrequentlyCgvActivity extends AppCompatActivity {

    private LinearLayout btnAddCGV;
    private RecyclerView rvFrequentlyCGVContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frequently_cgv);

        init();

        btnAddCGV.setOnClickListener(v -> {

        });
    }

    public void init() {
        rvFrequentlyCGVContainer = findViewById(R.id.rv_frequently_cgv_container);
        btnAddCGV = findViewById(R.id.btn_add_cgv);

        LinearLayoutManager manager = new LinearLayoutManager(FrequentlyCgvActivity.this, RecyclerView.VERTICAL, false);
        FrequentlyCGVAdapter adapter = new FrequentlyCGVAdapter();

        rvFrequentlyCGVContainer.setAdapter(adapter);
        rvFrequentlyCGVContainer.setLayoutManager(manager);
    }
}