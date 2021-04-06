package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.seat.Seat;
import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.model.user.User;
import com.example.cgvapplication.service.dto.ticketing.TicketingSaveReqDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class SeatChoiceActivity extends AppCompatActivity implements View.OnClickListener {

    private static final String TAG = "SeatChoiceActivity2";

    private Toolbar mToolbarSeatChoice;
    private ImageView mIvBack;
    private TextView mTvTheater, mTvHall, mTvTitle, mTvNormalPerson, mTvStudent, mTvPreferential, mTvPayment;
    private Button mBtnPaymentChoice;

    private Gson gson = new Gson();

    private TimeTable timeTable;
    private int totalPersons = 0;
    private int totalPayment = 0;

    private List<String> mSeatNames = new ArrayList<>();
    private int isSelect = 0;

    private List<Long> seatIds = new ArrayList<>();
    private List<Integer> personTypes = new ArrayList<>();
    private ArrayList<String> jsonDatas = new ArrayList<>();

    ViewGroup layout;

    String seats = "/AAAAA/"
            + "AAAAA/"
            + "AAAAA/"
            + "AAAAA/";


    int seatSize = 100;
    int seatGaping = 20;

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
        layoutSeat.setPadding(8 * seatGaping, 8 * seatGaping, 8 * seatGaping, 8 * seatGaping);
        layout.addView(layoutSeat);

        LinearLayout layout = null;

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

        int count = 0;
        int column = 0;
        char row = 64;

        for (int i = 0; i < seats.length(); i++) {
            if (seats.charAt(i) == '/') {
                row++;
                column = 0;
                layout = new LinearLayout(this);
                layout.setOrientation(LinearLayout.HORIZONTAL);
                layoutSeat.addView(layout);
            } else if (seats.charAt(i) == 'A') {
                count++;
                column++;
                TextView view = new TextView(this);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(seatSize, seatSize);
                layoutParams.setMargins(seatGaping, seatGaping, seatGaping, seatGaping);
                view.setLayoutParams(layoutParams);
                view.setPadding(0, 0, 0, 2 * seatGaping);
                view.setId(count);
                view.setGravity(Gravity.CENTER);
                view.setBackgroundResource(R.drawable.empty_seat);
                view.setTextColor(Color.WHITE);
                view.setText(String.valueOf(row) + column + "");
                view.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 9);
                view.setTag(STATUS_AVAILABLE);
                layout.addView(view);
                view.setOnClickListener(this);
            } else if (seats.charAt(i) == 'B') {
                count++;
                column++;
                ImageView view = new ImageView(this);
                LinearLayout.LayoutParams layoutParams = new LinearLayout.LayoutParams(seatSize, seatSize);
                layoutParams.setMargins(seatGaping, seatGaping, seatGaping, seatGaping);
                view.setLayoutParams(layoutParams);
                view.setPadding(0, 0, 0, 0);
                view.setId(count);
                view.setBackgroundResource(R.drawable.none_empty_seat);
                view.setImageResource(R.drawable.ic_none_seat);
                view.setScaleType(ImageView.ScaleType.CENTER);
                view.setTag(STATUS_BOOKED);
                layout.addView(view);
                view.setOnClickListener(this);
            } else if (seats.charAt(i) == '_') {
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
                if (selectedIds.contains(view.getId() + ",")) {
                    selectedIds = selectedIds.replace(+view.getId() + ",", "");
                    view.setBackgroundResource(R.drawable.empty_seat);
                    TextView mSeat = view.findViewById(view.getId());
                    mSeatNames.remove(mSeat.getText().toString());
                    isSelect--;
                    Log.d(TAG, "onClick: " + mSeatNames);
                } else {
                    if (isSelect == totalPersons) {
                        Toast.makeText(this, "좌석 선택이 완료되었습니다.", Toast.LENGTH_SHORT).show();
                    } else {
                        selectedIds = selectedIds + view.getId() + ",";
                        view.setBackgroundResource(R.drawable.none_empty_seat);
                        TextView mSeat = view.findViewById(view.getId());
                        mSeatNames.add(mSeat.getText().toString());
                        isSelect++;
                        Log.d(TAG, "onClick: " + mSeatNames);
                    }
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

        mTvTheater = findViewById(R.id.tv_theater);
        mTvHall = findViewById(R.id.tv_hall);
        mTvTitle = findViewById(R.id.tv_title);
        mTvNormalPerson = findViewById(R.id.tv_normalPerson);
        mTvStudent = findViewById(R.id.tv_student);
        mTvPreferential = findViewById(R.id.tv_preferential);
        mTvPayment = findViewById(R.id.tv_payment);

        int defaultNum = 0;
        int normalPersons = getIntent().getIntExtra("normalPersons", defaultNum);
        int students = getIntent().getIntExtra("students", defaultNum);
        int preferentials = getIntent().getIntExtra("preferentials", defaultNum);

        for (int i = 0; i<students; i++) {
            personTypes.add(0);
        }

        for (int i = 0; i<normalPersons; i++) {
            personTypes.add(1);
        }

        for (int i = 0; i<preferentials; i++) {
            personTypes.add(2);
        }

        String jsonData = getIntent().getStringExtra("timeTable");

        totalPersons = (normalPersons + students + preferentials);
        totalPayment = ((normalPersons * 11000) + (students * 7000) + (preferentials * 7000));


        timeTable = gson.fromJson(jsonData, TimeTable.class);

        mTvTheater.setText(timeTable.getTheater().getLocation());
        mTvHall.setText(timeTable.getHall().getName());
        mTvTitle.setText(timeTable.getMovie().getTitle());
        mTvNormalPerson.setText(normalPersons + "");
        mTvStudent.setText(students + "");
        mTvPreferential.setText(preferentials + "");
        mTvPayment.setText(totalPayment + "원");

    }

    private void listener() {
        mIvBack.setOnClickListener(view -> {
            finish();
        });
        mBtnPaymentChoice.setOnClickListener(view -> {

            User userEntity = gson.fromJson(SharedPreference.getAttribute(this, "userEntity"), User.class);

            for (Seat seat : timeTable.getHall().getSeats()) {
                seatIds.add(seat.getId());
            }

            for (int i = 0; i < totalPersons; i++) {
                jsonDatas.add(gson.toJson(new TicketingSaveReqDto(personTypes.get(i), seatIds.get(i), timeTable.getId(), userEntity.getId())));
            }
            String jsonData = gson.toJson(timeTable);

            finish();
            Intent intent = new Intent(SeatChoiceActivity.this, TicketingPaymentActivity.class);
            intent.putStringArrayListExtra("TicketingSaveDatas", jsonDatas);
            intent.putExtra("timeTable", jsonData);
            intent.putExtra("screeningDate", getIntent().getStringExtra("screeningDate"));
            intent.putExtra("runningTime", getIntent().getStringExtra("runningTime"));
            startActivity(intent);
        });
    }
}