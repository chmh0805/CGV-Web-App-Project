package com.example.cgvapplication.helper;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import com.example.cgvapplication.LoginActivity;
import com.example.cgvapplication.R;

public class MyNavigationHelper {

    private static final String TAG = "MyNavigationHelper";
    private final Context mContext;
    private TextView mTvGoLogin;
    private ImageView mIvMenu, mIvClose, mIvBack;
    private DrawerLayout mDrawer;
    private LinearLayout mLinearNavigation;

    public MyNavigationHelper(Context mContext) {
        this.mContext = mContext;
    }

    public void enable(View view) {
        init(view);
        listener();

    }

    private void init(View view) {
        mDrawer = ((Activity) mContext).findViewById(R.id.drawer);
        mIvMenu = ((Activity) mContext).findViewById(R.id.iv_menu);
        mIvBack = ((Activity) mContext).findViewById(R.id.iv_back);
        mTvGoLogin = view.findViewById(R.id.tv_go_login);
        mIvClose = view.findViewById(R.id.iv_close);

    }

    private void listener() {
        mTvGoLogin.setOnClickListener(v -> {
            if(!(mContext.getClass().equals(LoginActivity.class))) {
                Intent intent = new Intent(mContext, LoginActivity.class);
                intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mContext.startActivity(intent);
            } else {
                mDrawer.closeDrawer(GravityCompat.END);
            }
        });
        mIvMenu.setOnClickListener(v -> {
            mDrawer.openDrawer(GravityCompat.END);
        });
        mIvClose.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
        });

        if(mIvBack != null) {
            mIvBack.setOnClickListener(v -> {
                ((Activity) mContext).finish();
            });

        }

    }
}
