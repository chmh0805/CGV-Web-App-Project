package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;

import com.example.cgvapplication.adapter.findtheater.FindTheaterLocationAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

import java.util.ArrayList;
import java.util.List;

public class FindTheaterActivity extends AppCompatActivity {

    private static final String TAG = "FindTheaterActivity";
    private Toolbar mToolbarFindTheater;
    private MyNavigationHelper myNavigationHelper;
    private LinearLayout mLinearNavigation;
    private List<String> mLocations;
    private RecyclerView mRvFindTheaterLocation;
    private FindTheaterLocationAdapter adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_theater);

        init();


    }

    private void init() {
        setContentView(R.layout.activity_find_theater);

        mToolbarFindTheater = findViewById(R.id.toolbar_find_theater);
        myNavigationHelper = new MyNavigationHelper(FindTheaterActivity.this);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mRvFindTheaterLocation = findViewById(R.id.rv_find_theater_location);
        mLocations = new ArrayList<>();

        mLocations.add("서울");
        mLocations.add("경기");
        mLocations.add("인천");
        mLocations.add("강원");
        mLocations.add("대전/충청");
        mLocations.add("대구");
        mLocations.add("부산/울산");
        mLocations.add("경상");
        mLocations.add("관주/전라/제주");

        adapter = new FindTheaterLocationAdapter(mLocations);
        LinearLayoutManager manager = new LinearLayoutManager(this, RecyclerView.VERTICAL, false);

        setSupportActionBar(mToolbarFindTheater);

        myNavigationHelper.enable(mLinearNavigation);
        mRvFindTheaterLocation.setAdapter(adapter);
        mRvFindTheaterLocation.setLayoutManager(manager);
    }
}