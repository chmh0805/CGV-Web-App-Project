package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatButton;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.servicecenter.ServiceCenterFAQAdapter;
import com.example.cgvapplication.adapter.servicecenter.ServiceCenterNoticeAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.faq.Faq;
import com.example.cgvapplication.model.notice.Notice;
import com.example.cgvapplication.service.SupportService;
import com.example.cgvapplication.service.dto.CMRespDto;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class ServiceCenterActivity extends AppCompatActivity {

    private static final String TAG = "ServiceCenterActivity";

    private RecyclerView rvServiceCenterContainer;
    private LinearLayoutManager containerManager;
    private AppCompatButton btnServiceCenterFAQ, btnServiceCenterNotice;

    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private Toolbar mToolbarServiceCenter;

    private List<Faq> faqs;
    private List<Notice> notices;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service_center);

        init();
        listener();

    }

    private void init() {
        faqs = new ArrayList<>();
        notices = new ArrayList<>();

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

        btnServiceCenterFAQ.setOnClickListener(v -> {
            faqList();
        });

        btnServiceCenterNotice.setOnClickListener(v -> {
            noticeList();
        });

        int defaultValue = 0;
        int page = getIntent().getIntExtra("ServiceCenter", defaultValue);

        if (page == 0) {
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

        SupportService supportService = SupportService.retrofit.create(SupportService.class);
        Call<CMRespDto<List<Faq>>> call = supportService.findAllFaq();
        call.enqueue(new Callback<CMRespDto<List<Faq>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<Faq>>> call, Response<CMRespDto<List<Faq>>> response) {
                CMRespDto<List<Faq>> faqsData = response.body();
                try {
                    Log.d(TAG, "onResponse: "+faqsData);
                    faqs = faqsData.getData();
                    ServiceCenterFAQAdapter faqAdapter = new ServiceCenterFAQAdapter(faqs);
                    rvServiceCenterContainer.setAdapter(faqAdapter);
                    rvServiceCenterContainer.setLayoutManager(containerManager);
                }catch (Exception e) {

                }
            }

            @Override
            public void onFailure(Call<CMRespDto<List<Faq>>> call, Throwable t) {

            }
        });
    }

    public void noticeList() {
        btnServiceCenterFAQ.setSelected(false);
        btnServiceCenterNotice.setSelected(true);
        btnServiceCenterFAQ.setTextColor(getResources().getColor(R.color.grey_dark));
        btnServiceCenterNotice.setTextColor(getResources().getColor(R.color.black));

        SupportService supportService = SupportService.retrofit.create(SupportService.class);
        Call<CMRespDto<List<Notice>>> call = supportService.findAllNotice();
        call.enqueue(new Callback<CMRespDto<List<Notice>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<Notice>>> call, Response<CMRespDto<List<Notice>>> response) {
                CMRespDto<List<Notice>> noticesData = response.body();
                try {
                    Log.d(TAG, "onResponse: "+noticesData);
                    notices = noticesData.getData();
                    ServiceCenterNoticeAdapter noticeAdapter = new ServiceCenterNoticeAdapter(notices);
                    rvServiceCenterContainer.setAdapter(noticeAdapter);
                    rvServiceCenterContainer.setLayoutManager(containerManager);
                }catch (Exception e) {

                }
            }

            @Override
            public void onFailure(Call<CMRespDto<List<Notice>>> call, Throwable t) {

            }
        });
    }
}