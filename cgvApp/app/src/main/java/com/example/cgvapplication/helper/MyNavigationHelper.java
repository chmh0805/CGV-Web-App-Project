package com.example.cgvapplication.helper;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.core.view.GravityCompat;
import androidx.drawerlayout.widget.DrawerLayout;

import com.example.cgvapplication.activity.FindTheaterActivity;
import com.example.cgvapplication.activity.GiftCardActivity;
import com.example.cgvapplication.activity.LoginActivity;
import com.example.cgvapplication.activity.MainActivity;
import com.example.cgvapplication.activity.MovieListActivity;
import com.example.cgvapplication.activity.MovieLogActivity;
import com.example.cgvapplication.activity.MyCgvActivity;
import com.example.cgvapplication.activity.NoticeBoxActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.ServiceCenterActivity;
import com.example.cgvapplication.activity.TicketingActivity;
import com.example.cgvapplication.model.faq.Faq;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.SupportService;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.example.cgvapplication.service.UserService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.google.gson.Gson;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MyNavigationHelper {

    private static final String TAG = "MyNavigationHelper";
    private final Context mContext;
    private TextView mTvGoLogin, mTvGoMyCgv, mTvGoGiftCard, mTvGoServiceCenter, mTvLogout, mTvNickName, mTvGoMovieLogSaw;
    private ImageView mIvMenu, mIvClose, mIvBack, mIvTicketingMovie, mIvTicketingTheater, mIvMovie, mIvSearchTheater, mIvMyViewMovie, mIvBell, mIvHome, mIvCineShop;
    private DrawerLayout mDrawer, mFrequentlyCgvDrawer;
    private ConstraintLayout mClProfile;
    private LinearLayout mLinearNavigation;
    private String token;
    private String userEntity;
    private Gson gson = new Gson();

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
        mTvNickName = view.findViewById(R.id.tv_nickname);
        mTvLogout = view.findViewById(R.id.tv_logout);
        mTvGoMyCgv = view.findViewById(R.id.tv_go_my_cgv);
        mTvGoGiftCard = view.findViewById(R.id.tv_go_gift_card);
        mTvGoMovieLogSaw = view.findViewById(R.id.tv_go_movie_log_saw);
        mIvClose = view.findViewById(R.id.iv_close);
        mIvBell = view.findViewById(R.id.iv_bell);
        mIvHome = view.findViewById(R.id.iv_home);
        mIvCineShop = view.findViewById(R.id.iv_cineshop);
        mClProfile = view.findViewById(R.id.cl_profile);
    }

    private void listener() {

        mIvHome.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            if (!(mContext.getClass().equals(MainActivity.class))) {
                Intent intent = new Intent(mContext, MainActivity.class);
                mContext.startActivity(intent);
            }
        });

        mTvLogout.setOnClickListener(v -> {
            token = SharedPreference.getAttribute(mContext, "Authorization");
            mDrawer.closeDrawer(GravityCompat.END);
            if(token == null) {
                if (!(mContext.getClass().equals(LoginActivity.class))) {
                    Intent intent = new Intent(mContext, LoginActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    mContext.startActivity(intent);
                }
            } else {
                SharedPreference.removeAllAttribute(mContext);
                mClProfile.setVisibility(View.GONE);
                mTvGoLogin.setVisibility(View.VISIBLE);
                if (!(mContext.getClass().equals(MainActivity.class))) {
                    Intent intent = new Intent(mContext, MainActivity.class);
                    mContext.startActivity(intent);
                }
            }
        });

        mTvGoLogin.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);

            if (!(mContext.getClass().equals(LoginActivity.class))) {
                mDrawer.closeDrawer(GravityCompat.END);
                Intent intent = new Intent(mContext, LoginActivity.class);
                intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mContext.startActivity(intent);
            }
        });

        mClProfile.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);

            if (!(mContext.getClass().equals(MyCgvActivity.class))) {
                Intent intent = new Intent(mContext, MyCgvActivity.class);
                intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                userEntity = SharedPreference.getAttribute(mContext, "userEntity");
                intent.putExtra("userEntity", userEntity);
                mContext.startActivity(intent);
            }
        });

        mTvGoMyCgv.setOnClickListener(v -> {
            token = SharedPreference.getAttribute(mContext, "Authorization");
            mDrawer.closeDrawer(GravityCompat.END);

            if (token == null) {
                if (!(mContext.getClass().equals(LoginActivity.class))) {
                    Intent intent = new Intent(mContext, LoginActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    mContext.startActivity(intent);
                }
            } else {
                if (!(mContext.getClass().equals(MyCgvActivity.class))) {
                    Intent intent = new Intent(mContext, MyCgvActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    userEntity = SharedPreference.getAttribute(mContext, "userEntity");
                    intent.putExtra("userEntity", userEntity);
                    mContext.startActivity(intent);
                }
            }
        });

        mIvMenu.setOnClickListener(v -> {
            token = SharedPreference.getAttribute(mContext, "Authorization");

            if (!(token == null)) {
                mTvLogout.setText("로그아웃");
                userEntity = SharedPreference.getAttribute(mContext, "userEntity");
                if(userEntity == null) {
                    UserService userService = UserService.retrofit.create(UserService.class);
                    String token = SharedPreference.getAttribute(mContext, "Authorization");
                    Call<CMRespDto<User>> callUserEntity = userService.findById(token);
                    callUserEntity.enqueue(new Callback<CMRespDto<User>>() {
                        @Override
                        public void onResponse(Call<CMRespDto<User>> call, Response<CMRespDto<User>> response) {
                            CMRespDto<User> userData = response.body();
                            if(userData == null) {
                                SharedPreference.removeAllAttribute(mContext);
                                mTvLogout.setText("로그인");
                                mClProfile.setVisibility(View.GONE);
                                mTvGoLogin.setVisibility(View.VISIBLE);
                            } else {
                                mClProfile.setVisibility(View.VISIBLE);
                                mTvNickName.setText(userData.getData().getUsername());
                                mTvGoLogin.setVisibility(View.GONE);
                                Gson gson = new Gson();
                                String userEntity = gson.toJson(userData.getData());
                                SharedPreference.setAttribute(mContext, "userEntity", userEntity);
                            }
                        }

                        @Override
                        public void onFailure(Call<CMRespDto<User>> call, Throwable t) {

                        }
                    });
                } else {
                    User userData = gson.fromJson(userEntity, User.class);
                    mTvNickName.setText(userData.getUsername());
                }
            } else {
                mTvLogout.setText("로그인");
                mTvGoLogin.setVisibility(View.VISIBLE);
                mClProfile.setVisibility(View.GONE);
            }
            mDrawer.openDrawer(GravityCompat.END);
            Log.d(TAG, "listener: "+mTvGoLogin.getVisibility()); // Gone = 8
            Log.d(TAG, "listener: "+mClProfile.getVisibility()); // Visible = 0
        });

        mIvClose.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
        });

        mTvGoMovieLogSaw.setOnClickListener(v -> {
            String token = SharedPreference.getAttribute(mContext, "Authorization");
            mDrawer.closeDrawer(GravityCompat.END);

            if (token == null) {
                if (!(mContext.getClass().equals(LoginActivity.class))) {
                    Intent intent = new Intent(mContext, LoginActivity.class);
                    intent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                    mContext.startActivity(intent);
                }
            } else {
                int page = 1;
                Intent intent = new Intent(mContext, MovieLogActivity.class);
                intent.putExtra("MovieLog", page);
                mContext.startActivity(intent);
            }
        });

        mIvTicketingMovie.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, TicketingActivity.class);
            mContext.startActivity(intent);
        });

        mIvTicketingTheater.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            int page = 1;
            Intent intent = new Intent(mContext, TicketingActivity.class);
            intent.putExtra("TicketingTheater", page);
            mContext.startActivity(intent);
        });

        mIvMovie.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, MovieListActivity.class);
            mContext.startActivity(intent);
        });

        mIvBell.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, NoticeBoxActivity.class);
            mContext.startActivity(intent);
        });

        mIvSearchTheater.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, FindTheaterActivity.class);
            mContext.startActivity(intent);
        });

        mTvGoServiceCenter.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, ServiceCenterActivity.class);
            mContext.startActivity(intent);
        });

        mTvGoGiftCard.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, GiftCardActivity.class);
            mContext.startActivity(intent);
        });

        mIvMovie.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            Intent intent = new Intent(mContext, MovieListActivity.class);
            mContext.startActivity(intent);
        });

        mIvMyViewMovie.setOnClickListener(v -> {
            mDrawer.closeDrawer(GravityCompat.END);
            int page = 1;
            Intent intent = new Intent(mContext, MovieLogActivity.class);
            intent.putExtra("MovieLog", page);
            mContext.startActivity(intent);
        });

        mIvCineShop.setOnClickListener(v -> {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("https://smartstore.naver.com/cgv_cineshop"));
            mContext.startActivity(intent);
        });

        if (mIvBack != null) {
            mIvBack.setOnClickListener(v -> {
                ((Activity) mContext).finish();
            });
        }

    }
}
