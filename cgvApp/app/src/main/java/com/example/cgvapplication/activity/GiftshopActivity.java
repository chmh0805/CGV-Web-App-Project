package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager.widget.ViewPager;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.LinearLayout;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.GiftshopFragmentPagerAdapter;
import com.example.cgvapplication.fragment.FragGiftShopCombo;
import com.example.cgvapplication.fragment.FragGiftShopDrink;
import com.example.cgvapplication.fragment.FragGiftShopGiftcard;
import com.example.cgvapplication.fragment.FragGiftShopPopcorn;
import com.example.cgvapplication.fragment.FragGiftShopSnack;
import com.example.cgvapplication.fragment.FragGiftShopTicket;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.google.android.material.tabs.TabLayout;

public class GiftshopActivity extends AppCompatActivity {

    private static final String TAG = "GiftshopActivity";

    private GiftshopFragmentPagerAdapter mGiftshopFragmentPagerAdapter;
    private ViewPager mVpGiftshopContainer;
    private LinearLayout mLinearNavigation;
    private Toolbar mToolbarGiftshop;
    private TabLayout mTabsGiftshop;
    private MyNavigationHelper myNavigationHelper;
    private ImageView mIvShoppingCart;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_giftshop);
        setSupportActionBar(mToolbarGiftshop);
        init();

        myNavigationHelper.enable(mLinearNavigation);
        listener();
    }

    private void init() {
        mGiftshopFragmentPagerAdapter = new GiftshopFragmentPagerAdapter(getSupportFragmentManager(), 1);
        mVpGiftshopContainer = findViewById(R.id.vp_giftshop_container);
        mToolbarGiftshop = findViewById(R.id.toolbar_giftshop);
        mTabsGiftshop = findViewById(R.id.tabs_giftshop);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mIvShoppingCart = findViewById(R.id.iv_shopping_cart);

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
        myNavigationHelper = new MyNavigationHelper(GiftshopActivity.this);


    }

    private void listener() {
        mIvShoppingCart.setOnClickListener(view -> {
            Intent intent = new Intent(GiftshopActivity.this, ShoppingBasketActivity.class);
            startActivity(intent);
        });
    }
}