package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.viewpager.widget.ViewPager;

import android.os.Bundle;
import android.widget.ImageView;

import com.example.cgvapplication.adapter.TicketingFragMentPagerAdapter;
import com.google.android.material.tabs.TabLayout;

import java.util.Objects;

public class TicketingActivity extends AppCompatActivity {

    private ImageView mIvClose;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ticketing);
        init();
        listener();
    }

    public void init() {
        TicketingFragMentPagerAdapter mTicketingFragMentPagerAdapter = new TicketingFragMentPagerAdapter(getSupportFragmentManager(), 1);
        ViewPager mVpTicketingContainer = findViewById(R.id.vp_ticketing_container);
        TabLayout mTabsTicketing = findViewById(R.id.tabs_ticketing);
        mIvClose = findViewById(R.id.iv_close);

        mTicketingFragMentPagerAdapter.addFragment(new FragTicketingMovie(getSupportFragmentManager()));
        mTicketingFragMentPagerAdapter.addFragment(new FragTicketingTheater(getSupportFragmentManager()));

        mVpTicketingContainer.setAdapter(mTicketingFragMentPagerAdapter);

        mTabsTicketing.setupWithViewPager(mVpTicketingContainer);

        Objects.requireNonNull(mTabsTicketing.getTabAt(0)).setText("영화별예매");
        Objects.requireNonNull(mTabsTicketing.getTabAt(1)).setText("극장별예매");

        int defaultValue = 0;
        int page = getIntent().getIntExtra("TicketingTheater",defaultValue);
        mVpTicketingContainer.setCurrentItem(page);
    }

    public void listener() {
        mIvClose.setOnClickListener(view -> {
            finish();
        });
    }
}