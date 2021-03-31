package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.os.Bundle;
import android.widget.ImageView;

import com.example.cgvapplication.R;

public class TicketingPaymentActivity extends AppCompatActivity {

    private Toolbar mToolbarPayment;
    private ImageView mIvBack;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ticketing_payment);
        init();
        setSupportActionBar(mToolbarPayment);
        listener();
    }

    private void init() {
        mToolbarPayment = findViewById(R.id.toolbar_payment);
        mIvBack = findViewById(R.id.iv_back);
    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });
    }
}