package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import android.content.Intent;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.TextView;

public class GiftShopDetailActivity extends AppCompatActivity {

    private ImageView mIvBack, mIvMenu, mIvClose;
    private Toolbar mToolbarGiftShop;
    private DrawerLayout mDrawer;
    private TextView mTvGiftCard;
    private ImageView mIvGiftCard;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_gift_shop_detail);
        init();
        setSupportActionBar(mToolbarGiftShop);
        listener();
        Intent intent = getIntent();
        int imgSrc = intent.getExtras().getInt("imageSrc");
        String name = intent.getExtras().getString("name");
        mTvGiftCard.setText(name);
        mIvGiftCard.setImageResource(imgSrc);
    }

    private void init() {
        mToolbarGiftShop = findViewById(R.id.toolbar_giftshop);
        mIvBack = findViewById(R.id.iv_back);
        mIvMenu = findViewById(R.id.iv_menu);
        mIvClose = findViewById(R.id.iv_close);
        mDrawer = findViewById(R.id.drawer);
        mTvGiftCard = findViewById(R.id.tv_gift_card);
        mIvGiftCard = findViewById(R.id.iv_gift_card);
    }

    private void listener() {
        mIvBack.setOnClickListener(v -> {
            finish();
        });

        mIvMenu.setOnClickListener(v -> {
            mDrawer.openDrawer(GravityCompat.END);
        });

        mIvClose.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
        });
    }
}