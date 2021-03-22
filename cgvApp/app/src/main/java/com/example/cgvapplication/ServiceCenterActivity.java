package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import com.example.cgvapplication.adapter.servicecenter.ServiceCenterFAQAdapter;
import com.example.cgvapplication.adapter.servicecenter.ServiceCenterNoticeAdapter;

public class ServiceCenterActivity extends AppCompatActivity {

    private static final String TAG = "ServiceCenterActivity";
    private RecyclerView rvServiceCenterContainer;
    private LinearLayoutManager containerManager;
    private AppCompatButton btnServiceCenterFAQ, btnServiceCenterNotice;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service_center);

        init();

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

        containerManager = new LinearLayoutManager(ServiceCenterActivity.this, RecyclerView.VERTICAL, false);
    }

    public void faqList() {
        btnServiceCenterFAQ.setSelected(true);
        btnServiceCenterNotice.setSelected(false);
        btnServiceCenterFAQ.setTextColor(getResources().getColor(R.color.black));
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