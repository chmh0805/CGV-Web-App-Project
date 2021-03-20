package com.example.cgvapplication;

import android.os.Bundle;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.viewpager.widget.ViewPager;

import com.example.cgvapplication.adapter.MainFragmentPagerAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.google.android.material.tabs.TabLayout;

public class MainActivity extends AppCompatActivity {

    private MainFragmentPagerAdapter mMainFragmentPagerAdapter;
    private ViewPager mVpContainer;
    private TabLayout mTabs;
    private Toolbar mToolbarMain;
    private ImageView mIvMenu, mIvClose;
    private DrawerLayout mDrawer;
    private TextView mTvGoLogin;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNagiation;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        init();
        setSupportActionBar(mToolbarMain);

//        mIvMenu.setOnClickListener(view -> {
//            mDrawer.openDrawer(GravityCompat.END);
//        });
//        mIvClose.setOnClickListener(view -> {
//            mDrawer.closeDrawer(GravityCompat.END);
//        });
        mMyNavigationHelper.enable(mLinearNagiation);


    }

    private void init() {
        mIvClose = findViewById(R.id.iv_close);
        //mDrawer = findViewById(R.id.drawer);
        //mIvMenu = findViewById(R.id.iv_menu);
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