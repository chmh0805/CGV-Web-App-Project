package com.example.cgvapplication.activity;

import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.MainFragmentPagerAdapter;
import com.example.cgvapplication.fragment.FragGiftShop;
import com.example.cgvapplication.fragment.FragHome;
import com.example.cgvapplication.fragment.FragMovieTalk;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.google.android.material.tabs.TabLayout;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity2";

    private MainFragmentPagerAdapter mMainFragmentPagerAdapter;
    private ViewPager mVpContainer;
    private TabLayout mTabs;
    private Toolbar mToolbarMain;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNagiation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        init();

        setSupportActionBar(mToolbarMain);

        mMyNavigationHelper.enable(mLinearNagiation);


    }

    private void init() {

        Log.d(TAG, "init: ");
        mToolbarMain = findViewById(R.id.toolbar_main);
        mMainFragmentPagerAdapter = new MainFragmentPagerAdapter(getSupportFragmentManager(), 1);
        mVpContainer = findViewById(R.id.vp_container);
        mTabs = findViewById(R.id.tabs);
        mLinearNagiation = findViewById(R.id.linear_navigation);

        mMainFragmentPagerAdapter.addFragment(new FragHome());
        mMainFragmentPagerAdapter.addFragment(new FragMovieTalk());
        mMainFragmentPagerAdapter.addFragment(new FragGiftShop());
        mVpContainer.setAdapter(mMainFragmentPagerAdapter);

        mTabs.setupWithViewPager(mVpContainer);

        mTabs.getTabAt(0).setText("홈");
        mTabs.getTabAt(1).setText("무비톡");
        mTabs.getTabAt(2).setText("기프트샵");

        mMyNavigationHelper = new MyNavigationHelper(MainActivity.this);

    }
}