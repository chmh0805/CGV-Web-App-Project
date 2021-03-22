package com.example.cgvapplication;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

public class SeatChoiceActivity extends AppCompatActivity implements View.OnClickListener{

    private Toolbar mToolbarSeatChoice;
    private ImageView mIvBack;
    private Button mBtnPaymentChoice;
    ViewGroup layout;

    String seats = "/______AAAABBAAAA______/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/"
            +"AAAA__AAAAAAAAAAAA__AAAA/";

    int seatSize = 100;
    int seatGaping = 10;

    int STATUS_AVAILABLE = 1; // 빈 자리
    int STATUS_BOOKED = 2; // 예매 자리

    String selectedIds = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_seat_choice);
        init();
        setSupportActionBar(mToolbarSeatChoice);
        listener();

        LinearLayout layoutSeat = new LinearLayout(this);
        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        layoutSeat.setOrientation(LinearLayout.VERTICAL);
        layoutSeat.setLayoutParams(params);
        layoutSeat.setPadding(8*seatGaping, 8*seatGaping, 8*seatGaping, 8*seatGaping);
        layout.addView(layoutSeat);

        LinearLayout layout = null;

        int count = 0;
        int column = 0;
        char row = 64;

        TextView screenView = new TextView(this);

        LinearLayout.LayoutParams mLayoutParams = new LinearLayout.LayoutParams(700, 150);
        mLayoutParams.setMargins(0, 50, 0, 50);
        //screenView.setPadding();
        screenView.setLayoutParams(mLayoutParams);
        screenView.setGravity(Gravity.CENTER);
        screenView.setBackgroundResource(R.drawable.none_empty_seat);
        screenView.setText("SCREEN");
        screenView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 20);
        layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setGravity(Gravity.CENTER);
        layoutSeat.addView(layout);
        layout.addView(screenView);

        for (int i = 0; i < seats.length(); i++) {
            if(seats.charAt(i) == '/') {
                row++;
                layout = new LinearLayout(this);
                layout.setOrientation(LinearLayout.HORIZONTAL);
                layoutSeat.addView(layout);
            } else if(seats.charAt(i)=='A') {
                count++;
                column++;
                TextView view = new TextView(this);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(seatSize, seatSize);
                layoutParams.setMargins(seatGaping, seatGaping, seatGaping, seatGaping);
                view.setLayoutParams(layoutParams);
                view.setPadding(0,0,0,2*seatGaping);
                view.setId(count);
                view.setGravity(Gravity.CENTER);
                view.setBackgroundResource(R.drawable.empty_seat);
                view.setTextColor(Color.WHITE);
                view.setText(String.valueOf(row) + column+"");
                view.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 9);
                view.setTag(STATUS_AVAILABLE);
                layout.addView(view);
                view.setOnClickListener(this);
            } else if(seats.charAt(i)=='B') {
                count++;
                column++;
                ImageView view = new ImageView(this);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(seatSize, seatSize);
                layoutParams.setMargins(seatGaping, seatGaping, seatGaping, seatGaping);
                view.setLayoutParams(layoutParams);
                view.setPadding(0,0,0,0);
                view.setId(count);
                view.setBackgroundResource(R.drawable.none_empty_seat);
                view.setImageResource(R.drawable.ic_none_seat);
                view.setScaleType(ImageView.ScaleType.CENTER);
                view.setTag(STATUS_BOOKED);
                layout.addView(view);
                view.setOnClickListener(this);
            } else if(seats.charAt(i) == '_') {
                TextView view = new TextView(this);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(seatSize, seatSize);
                layoutParams.setMargins(seatGaping, seatGaping, seatGaping, seatGaping);
                view.setLayoutParams(layoutParams);
                view.setBackgroundColor(Color.TRANSPARENT);
                view.setText("");
                layout.addView(view);
            }
        }
    }

    @Override
    public void onClick(View view) {

        switch ((int) view.getTag()) {
            case 1:
                if(selectedIds.contains(view.getId()+",")) {
                    selectedIds = selectedIds.replace(+view.getId() + ",", "");
                    view.setBackgroundResource(R.drawable.empty_seat);
                } else {
                    selectedIds = selectedIds + view.getId() + ",";
                    view.setBackgroundResource(R.drawable.none_empty_seat);
                }
                break;
            case 2:
                break;
        }


    }

    private void init() {
        layout = findViewById(R.id.layoutSeat);
        mToolbarSeatChoice = findViewById(R.id.toolbar_seat_choice);
        mIvBack = findViewById(R.id.iv_back);
        mBtnPaymentChoice = findViewById(R.id.btn_payment_choice);


    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });
        mBtnPaymentChoice.setOnClickListener(view -> {
            Intent intent = new Intent(SeatChoiceActivity.this, TicketingPaymentActivity.class);
            startActivity(intent);
        });
    }
}