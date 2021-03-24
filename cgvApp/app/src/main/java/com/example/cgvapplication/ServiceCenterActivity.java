package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.adapter.servicecenter.ServiceCenterFAQAdapter;
import com.example.cgvapplication.adapter.servicecenter.ServiceCenterNoticeAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;

public class ServiceCenterActivity extends AppCompatActivity {

    private static final String TAG = "ServiceCenterActivity";

    private RecyclerView rvServiceCenterContainer;
    private LinearLayoutManager containerManager;
    private AppCompatButton btnServiceCenterFAQ, btnServiceCenterNotice;

    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private Toolbar mToolbarServiceCenter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service_center);

        init();
        listener();

        btnServiceCenterFAQ.setOnClickListener(v -> {
            faqList();
        });

        btnServiceCenterNotice.setOnClickListener(v -> {
            noticeList();
        });

    }

    private void init() {
        rvServiceCenterContainer = findViewById(R.id.rv_service_center_container);
        btnServiceCenterFAQ = findViewById(R.id.btn_service_center_faq);
        btnServiceCenterNotice = findViewById(R.id.btn_service_center_notice);

        mToolbarServiceCenter = findViewById(R.id.toolbar_service_center);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(ServiceCenterActivity.this);

        setSupportActionBar(mToolbarServiceCenter);
        mMyNavigationHelper.enable(mLinearNavigation);

        containerManager = new LinearLayoutManager(ServiceCenterActivity.this, RecyclerView.VERTICAL, false);
    }

    private void listener() {
        int defaultValue = 0;
        int page = getIntent().getIntExtra("ServiceCenter", defaultValue);

        if(page == 0) {
            faqList();
        } else {
            noticeList();
        }
    }

    public void faqList() {
        btnServiceCenterFAQ.setSelected(true);
        btnServiceCenterNotice.setSelected(false);
        btnServiceCenterFAQ.setTextColor(getResources().getColor(R.color.black));
        mLinearNavigation = findViewById(R.id.linear_navigation);
        btnServiceCenterNotice.setTextColor(getResources().getColor(R.color.grey_dark));

        ServiceCenterFAQAdapter faqAdapter = new ServiceCenterFAQAdapter();
        rvServiceCenterContainer.setAdapter(faqAdapter);
        rvServiceCenterContainer.setLayoutManager(containerManager);
    }

    public void noticeList() {
        btnServiceCenterFAQ.setSelected(false);
        btnServiceCenterNotice.setSelected(true);
        btnServiceCenterFAQ.setTextColor(getResources().getColor(R.color.grey_dark));
        btnServiceCenterNotice.setTextColor(getResources().getColor(R.color.black));

        ServiceCenterNoticeAdapter noticeAdapter = new ServiceCenterNoticeAdapter();
        rvServiceCenterContainer.setAdapter(noticeAdapter);
        rvServiceCenterContainer.setLayoutManager(containerManager);
    }
}