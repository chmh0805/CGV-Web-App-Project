package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.ticketing.Ticketing;
import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.service.TicketingService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.ticketing.TicketingSaveReqDto;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TicketingPaymentActivity extends AppCompatActivity {

    private static final String TAG = "TicketingPaymentActivit";

    private Toolbar mToolbarPayment;
    private ImageView mIvBack;

    private TextView mTvTitle, mTvScreeningDate, mTvRunningTime,
            mTvTheater, mTvHall, mTvNormalPersons, mTvStudents, mTvPreferentials,
            mTvPayment, mTvFinalAmount;
    private LinearLayout mLlNormalPersonGroup, mLlStudentGroup, mLlPreferentialGroup, mBtnMakePayment;

    private Gson gson = new Gson();

    private List<String> jsonDatas = new ArrayList<>();
    private List<TicketingSaveReqDto> ticketingSaves = new ArrayList<>();
    private TimeTable timeTable = null;

    private int normalPersons = 0;
    private int students = 0;
    private int preferentials = 0;
    private int finalPayment = 0;

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

        mTvTitle = findViewById(R.id.tv_title);
        mTvScreeningDate = findViewById(R.id.tv_screeningDate);
        mTvRunningTime = findViewById(R.id.tv_runningTime);
        mTvTheater = findViewById(R.id.tv_theater);
        mTvHall = findViewById(R.id.tv_hall);
        mTvNormalPersons = findViewById(R.id.tv_normalPersons);
        mTvStudents = findViewById(R.id.tv_students);
        mTvPreferentials = findViewById(R.id.tv_preferentials);
        mTvPayment = findViewById(R.id.tv_payment);
        mTvFinalAmount = findViewById(R.id.tv_final_amount);
        mLlNormalPersonGroup = findViewById(R.id.ll_normalPerson_group);
        mLlStudentGroup = findViewById(R.id.ll_student_group);
        mLlPreferentialGroup = findViewById(R.id.ll_preferential_group);
        mBtnMakePayment = findViewById(R.id.btn_make_payment);

        jsonDatas = getIntent().getStringArrayListExtra("TicketingSaveDatas");
        for (String jsonData : jsonDatas) {
            ticketingSaves.add(gson.fromJson(jsonData, TicketingSaveReqDto.class));
        }
        timeTable = gson.fromJson(getIntent().getStringExtra("timeTable"), TimeTable.class);

        mTvTitle.setText(timeTable.getMovie().getTitle());
        mTvScreeningDate.setText(getIntent().getStringExtra("screeningDate"));
        mTvRunningTime.setText(getIntent().getStringExtra("runningTime"));
        mTvTheater.setText(timeTable.getTheater().getLocation());
        mTvHall.setText(timeTable.getHall().getName());

        for (TicketingSaveReqDto ticketingSave : ticketingSaves) {
            if(ticketingSave.getPersonType() == 0) {
                students++;
            } else if(ticketingSave.getPersonType() == 1) {
                normalPersons++;
            } else if(ticketingSave.getPersonType() == 2) {
                preferentials++;
            }
        }

        if (normalPersons == 0) {
            mLlNormalPersonGroup.setVisibility(View.GONE);
        } else {
            mTvNormalPersons.setText(normalPersons+"");
        }

        if (students == 0) {
            mLlStudentGroup.setVisibility(View.GONE);
        } else {
            mTvStudents.setText(students+"");
        }

        if (preferentials == 0) {
            mLlPreferentialGroup.setVisibility(View.GONE);
        } else {
            mTvPreferentials.setText(preferentials+"");
        }
        finalPayment = ((preferentials*7000)+(students*7000)+(normalPersons*11000));

        mTvPayment.setText(finalPayment+"원");
        mTvFinalAmount.setText(finalPayment+"");

    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });

        mBtnMakePayment.setOnClickListener(v -> {
            for (TicketingSaveReqDto ticketingSave : ticketingSaves) {
                TicketingService ticketingService = TicketingService.retrofit.create(TicketingService.class);
                Call<CMRespDto<Void>> call = ticketingService.save(ticketingSave);
                call.enqueue(new Callback<CMRespDto<Void>>() {
                    @Override
                    public void onResponse(Call<CMRespDto<Void>> call, Response<CMRespDto<Void>> response) {
                        Log.d(TAG, "onResponse: 통신성공");
                    }

                    @Override
                    public void onFailure(Call<CMRespDto<Void>> call, Throwable t) {
                        Log.d(TAG, "onResponse: 통신실패");
                    }
                });
            }
            finish();
            Intent intent = new Intent(this, PaymentHistoryActivity.class);
            startActivity(intent);
        });
    }
}