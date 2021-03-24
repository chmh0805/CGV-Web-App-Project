package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.adapter.findtheater.FindTheaterPointAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

import java.util.ArrayList;
import java.util.List;

public class FindTheaterPointActivity extends AppCompatActivity {

    private static final String TAG = "FindTheaterPointActivity";

    private RecyclerView mRvFindTheaterPoint;
    private List<String> mPoints;
    private Toolbar mToolbarFindTheater;
    private LinearLayout mLinearNavigation;
    private MyNavigationHelper myNavigationHelper;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_theater_point);

        setSupportActionBar(mToolbarFindTheater);

        String location = getIntent().getStringExtra("location");

        download(location);
        init();

        myNavigationHelper.enable(mLinearNavigation);

    }

    public void init() {
        mRvFindTheaterPoint = findViewById(R.id.rv_find_theater_point);
        mToolbarFindTheater = findViewById(R.id.toolbar_find_theater);
        mLinearNavigation = findViewById(R.id.linear_navigation);

        myNavigationHelper = new MyNavigationHelper(FindTheaterPointActivity.this);

        LinearLayoutManager manager = new LinearLayoutManager(this, RecyclerView.VERTICAL, false);
        FindTheaterPointAdapter adapter = new FindTheaterPointAdapter(mPoints);

        mRvFindTheaterPoint.setAdapter(adapter);
        mRvFindTheaterPoint.setLayoutManager(manager);
    }

    public void download(String location) {
        mPoints = new ArrayList<>();

        mPoints.add(location);
        mPoints.add("CGV서면");
        mPoints.add("CGV홍대");
        mPoints.add("CGV건대");
    }
}