package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.widget.LinearLayout;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.payment.PaymentHistoryAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.ticketing.Ticketing;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.TicketingService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.Gson;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class PaymentHistoryActivity extends AppCompatActivity {

    private Toolbar mToolbarPaymentHistory;
    private MyNavigationHelper mMyNavigationHelper;
    private LinearLayout mLinearNavigation;
    private RecyclerView mRvPaymentHistoryContainer;

    private Gson gson = new Gson();

    private List<Ticketing> ticketings;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment_history);

        download();
        init();

        setSupportActionBar(mToolbarPaymentHistory);
    }

    private void init() {
        mRvPaymentHistoryContainer = findViewById(R.id.rv_payment_history_container);

        mMyNavigationHelper = new MyNavigationHelper(PaymentHistoryActivity.this);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mToolbarPaymentHistory = findViewById(R.id.toolbar_payment_history);
        mMyNavigationHelper.enable(mLinearNavigation);

    }

    private void download() {
        User userEntity = gson.fromJson(SharedPreference.getAttribute(PaymentHistoryActivity.this, "userEntity"), User.class);

        TicketingService ticketingService = TicketingService.retrofit.create(TicketingService.class);
        Call<CMRespDto<List<Ticketing>>> call = ticketingService.findByUserId(userEntity.getId());
        call.enqueue(new Callback<CMRespDto<List<Ticketing>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<Ticketing>>> call, Response<CMRespDto<List<Ticketing>>> response) {
                CMRespDto<List<Ticketing>> dto = response.body();
                ticketings = dto.getData();

                LinearLayoutManager manager = new LinearLayoutManager(PaymentHistoryActivity.this, RecyclerView.VERTICAL, false);
                PaymentHistoryAdapter paymentHistoryAdapter = new PaymentHistoryAdapter(ticketings);
                mRvPaymentHistoryContainer.setLayoutManager(manager);
                mRvPaymentHistoryContainer.setAdapter(paymentHistoryAdapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<Ticketing>>> call, Throwable t) {

            }
        });
    }
}