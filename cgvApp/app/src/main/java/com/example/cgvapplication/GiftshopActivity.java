package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.ImageView;

import com.example.cgvapplication.adapter.GiftshopFragmentPagerAdapter;
import com.example.cgvapplication.giftshop.FragGiftShopCombo;
import com.example.cgvapplication.giftshop.FragGiftShopDrink;
import com.example.cgvapplication.giftshop.FragGiftShopGiftcard;
import com.example.cgvapplication.giftshop.FragGiftShopPopcorn;
import com.example.cgvapplication.giftshop.FragGiftShopSnack;
import com.example.cgvapplication.giftshop.FragGiftShopTicket;
import com.google.android.material.tabs.TabLayout;

public class GiftshopActivity extends AppCompatActivity {

    private static final String TAG = "GiftshopActivity";

    private GiftshopFragmentPagerAdapter mGiftshopFragmentPagerAdapter;
    private ViewPager mVpGiftshopContainer;
    private DrawerLayout mDrawer;
    private Toolbar mToolbarGiftshop;
    private ImageView mIvMenu, mIvClose, mIvBack;
    private TabLayout mTabsGiftshop;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_giftshop);
        setSupportActionBar(mToolbarGiftshop);
        init();

        mIvMenu.setOnClickListener(view -> {
            mDrawer.openDrawer(GravityCompat.END);
        });
        mIvClose.setOnClickListener(view -> {
            mDrawer.closeDrawer(GravityCompat.END);
        });

        mIvBack.setOnClickListener(view -> {
            finish();
        });
    }

    private void init() {
        mGiftshopFragmentPagerAdapter = new GiftshopFragmentPagerAdapter(getSupportFragmentManager(), 1);
        mVpGiftshopContainer = findViewById(R.id.vp_giftshop_container);
        mDrawer = findViewById(R.id.drawer);
        mToolbarGiftshop = findViewById(R.id.toolbar_giftshop);
        mIvMenu = findViewById(R.id.iv_menu);
        mIvClose = findViewById(R.id.iv_close);
        mTabsGiftshop = findViewById(R.id.tabs_giftshop);
        mIvBack = findViewById(R.id.iv_back);

        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopTicket());
        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopGiftcard());
        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopCombo());
        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopPopcorn());
        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopDrink());
        mGiftshopFragmentPagerAdapter.addFragment(new FragGiftShopSnack());

        mVpGiftshopContainer.setAdapter(mGiftshopFragmentPagerAdapter);
        mTabsGiftshop.setupWithViewPager(mVpGiftshopContainer);

        mTabsGiftshop.getTabAt(0).setText("영화관람권");
        mTabsGiftshop.getTabAt(1).setText("기프트카드");
        mTabsGiftshop.getTabAt(2).setText("콤보");
        mTabsGiftshop.getTabAt(3).setText("팝콘");
        mTabsGiftshop.getTabAt(4).setText("음료");
        mTabsGiftshop.getTabAt(5).setText("스낵");

        int defaultValue = 0;
        int page = getIntent().getIntExtra("Giftcard",defaultValue);
        mVpGiftshopContainer.setCurrentItem(page);


    }
}