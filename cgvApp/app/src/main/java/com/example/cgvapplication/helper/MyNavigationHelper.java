package com.example.cgvapplication.helper;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import com.example.cgvapplication.FindTheaterActivity;
import com.example.cgvapplication.GiftCardActivity;
import com.example.cgvapplication.GiftshopActivity;
import com.example.cgvapplication.LoginActivity;
import com.example.cgvapplication.MainActivity;
import com.example.cgvapplication.MovieListActivity;
import com.example.cgvapplication.MovieLogActivity;
import com.example.cgvapplication.MyCgvActivity;
import com.example.cgvapplication.NoticeBoxActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.ServiceCenterActivity;
import com.example.cgvapplication.TicketingActivity;

public class MyNavigationHelper {

    private static final String TAG = "MyNavigationHelper";
    private final Context mContext;
    private TextView mTvGoLogin, mTvGoMyCgv, mTvGoGiftCard, mTvGoServiceCenter;
    private ImageView mIvMenu, mIvClose, mIvBack, mIvTicketingMovie, mIvTicketingTheater, mIvMovie, mIvSearchTheater, mIvMyViewMovie, mIvBell;
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
        mIvMovie = view.findViewById(R.id.iv_movie);
        mIvTicketingTheater = view.findViewById(R.id.iv_ticketing_theater);
        mIvTicketingMovie = view.findViewById(R.id.iv_ticketing_movie);
        mIvSearchTheater = view.findViewById(R.id.iv_search_theater);
        mIvMyViewMovie = view.findViewById(R.id.iv_my_view_movie);
        mTvGoServiceCenter = view.findViewById(R.id.tv_go_service_center);
        mTvGoLogin = view.findViewById(R.id.tv_go_login);
        mTvGoMyCgv = view.findViewById(R.id.tv_go_my_cgv);
        mTvGoGiftCard = view.findViewById(R.id.tv_go_gift_card);
        mIvClose = view.findViewById(R.id.iv_close);
        mIvBell = view.findViewById(R.id.iv_bell);

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
        mTvGoMyCgv.setOnClickListener(v -> {
            if(!(mContext.getClass().equals(MyCgvActivity.class))) {
                Intent intent = new Intent(mContext, MyCgvActivity.class);
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

        mIvBell.setOnClickListener(v -> {
            Intent intent = new Intent(mContext, NoticeBoxActivity.class);
            mContext.startActivity(intent);
        });

        mIvTicketingMovie.setOnClickListener(v ->{
            Intent intent = new Intent(mContext, TicketingActivity.class);
            mContext.startActivity(intent);
        });

        mIvTicketingTheater.setOnClickListener(v -> {
            int page = 1;
            Intent intent = new Intent(mContext, TicketingActivity.class);
            intent.putExtra("TicketingTheater", page);
            mContext.startActivity(intent);
        });

        mIvSearchTheater.setOnClickListener(v -> {
            Intent intent = new Intent(mContext, FindTheaterActivity.class);
            mContext.startActivity(intent);
        });

        mTvGoServiceCenter.setOnClickListener(v -> {
            int page = 0;
            Intent intent = new Intent(mContext, ServiceCenterActivity.class);
            intent.putExtra("ServiceCenter", page);
            mContext.startActivity(intent);
        });

        mTvGoGiftCard.setOnClickListener(v -> {
            Intent intent = new Intent(mContext, GiftCardActivity.class);
            mContext.startActivity(intent);
        });

        mIvMovie.setOnClickListener(v -> {
            Intent intent = new Intent(mContext, MovieListActivity.class);
            mContext.startActivity(intent);
        });

        mIvMyViewMovie.setOnClickListener(v -> {
            int page = 1;
            Intent intent = new Intent(mContext, MovieLogActivity.class);
            intent.putExtra("MovieLog", page);
            mContext.startActivity(intent);
        });

        if(mIvBack != null) {
            mIvBack.setOnClickListener(v -> {
                ((Activity) mContext).finish();
            });
        }

    }
}
