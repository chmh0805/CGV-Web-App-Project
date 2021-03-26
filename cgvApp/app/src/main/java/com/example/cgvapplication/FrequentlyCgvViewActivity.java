package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.ImageButton;

import com.example.cgvapplication.adapter.FrequentlyCGV.FreqCgvViewBtnBoxAdapter;
import com.example.cgvapplication.adapter.FrequentlyCGV.FreqCgvViewListAdapter;
import com.google.android.material.tabs.TabLayout;
import com.google.android.material.textfield.TextInputEditText;

import java.util.ArrayList;
import java.util.List;

public class FrequentlyCgvViewActivity extends AppCompatActivity {

    private static final String TAG = "FrequentlyCgvViewActivi";

    private List<String> mLocations;
    private List<String> mPoints;

    private DrawerLayout mDrawer;
    private RecyclerView mRvFrequentlyCgvBtnBox, mRvFrequentlyCgvList;
    private ImageButton mBtnFrequentlyCgvClose;
    private TextInputEditText mIptFrequentlyCgvSearch;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frequently_cgv_view);

        download();
        init();

        mBtnFrequentlyCgvClose.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
        });
    }

    private void init() {
        mRvFrequentlyCgvBtnBox = findViewById(R.id.rv_frequently_cgv_button_box);
        mRvFrequentlyCgvList = findViewById(R.id.rv_frequently_cgv_list_box);
        mBtnFrequentlyCgvClose = findViewById(R.id.btn_frequently_cgv_close);
        mIptFrequentlyCgvSearch = findViewById(R.id.ipt_frequently_cgv_search);
        mDrawer = findViewById(R.id.frequently_cgv_drawer);

        LinearLayoutManager manager = new LinearLayoutManager(this, RecyclerView.HORIZONTAL, false);
        FreqCgvViewBtnBoxAdapter adapter = new FreqCgvViewBtnBoxAdapter(mLocations, this);

        mRvFrequentlyCgvBtnBox.setAdapter(adapter);
        mRvFrequentlyCgvBtnBox.setLayoutManager(manager);
    }

    private void download() {
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
    }

    public void selectPoint(String location) {
        mPoints = new ArrayList<>();

        mPoints.add(location);

        LinearLayoutManager manager = new LinearLayoutManager(this, RecyclerView.VERTICAL, false);
        FreqCgvViewListAdapter adapter = new FreqCgvViewListAdapter(mPoints);
        mRvFrequentlyCgvList.setLayoutManager(manager);
        mRvFrequentlyCgvList.setAdapter(adapter);
    }
}