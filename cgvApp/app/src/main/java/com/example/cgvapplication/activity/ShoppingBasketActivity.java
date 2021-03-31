package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.CheckBox;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.ShoppingBasketAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

public class ShoppingBasketActivity extends AppCompatActivity {

    private final ShoppingBasketActivity shoppingBasketActivity = this;
    private Toolbar mToolbarDefault;
    private CheckBox mCbAllChecked;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_shopping_basket);
        init();
        mMyNavigationHelper.enable(mLinearNavigation);
        setSupportActionBar(mToolbarDefault);

    }
    private void init() {
        RecyclerView mRvShoppingBasket = findViewById(R.id.rv_shopping_basket);
        mToolbarDefault = findViewById(R.id.toolbar_default);
        mCbAllChecked = findViewById(R.id.cb_all_checked);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(ShoppingBasketActivity.this);
        TextView mTvToolbarTitle = findViewById(R.id.tv_toolbar_title);
        mTvToolbarTitle.setText("장바구니");
        ShoppingBasketAdapter mShoppingBasketAdapter = new ShoppingBasketAdapter(shoppingBasketActivity);
        LinearLayoutManager manger = new LinearLayoutManager(this, RecyclerView.VERTICAL, false);
        mRvShoppingBasket.setLayoutManager(manger);
        mRvShoppingBasket.setAdapter(mShoppingBasketAdapter);
    }
}