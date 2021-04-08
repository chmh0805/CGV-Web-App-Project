package com.example.cgvapplication.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.SeatChoiceActivity;
import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.service.TimeTableService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.android.material.bottomsheet.BottomSheetDialogFragment;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TicketingBottomDialogFragment extends BottomSheetDialogFragment {
    private static final String TAG = "TicketingBottomDialogFr";

    private BottomSheetDialogFragment mBottomSheetDialogFragment = this;

    private Button mBtnPersonChoice;
    private TextView mTvMovieTitle, mTvDate, mTvRunningTime, mTvTheater, mTvHall;
    private RadioGroup mRgNormalPerson, mRgStudent, mRgPreferential;

    private String runningTime, title, location, screeningDate, hallName;

    private int normalPersons = 0;
    private int students = 0;
    private int preferentials = 0;
    private int totalPersons = 0;

    private TimeTable timeTable;

    private Gson gson = new Gson();

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = getLayoutInflater().inflate(R.layout.ticketing_person_bottom_sheet, container, false);
        init(view);
        downloadTimeTableInfo();
        listener();

        return view;
    }

    private void init(View view) {
        mBtnPersonChoice = view.findViewById(R.id.btn_person_choice);
        mTvMovieTitle = view.findViewById(R.id.tv_movie_title);
        mTvDate = view.findViewById(R.id.tv_date);
        mTvRunningTime = view.findViewById(R.id.tv_runningTime);
        mTvTheater = view.findViewById(R.id.tv_theater);
        mTvHall = view.findViewById(R.id.tv_hall);

        mRgNormalPerson = view.findViewById(R.id.rg_normal_person);
        mRgStudent = view.findViewById(R.id.rg_student);
        mRgPreferential = view.findViewById(R.id.rg_preferential);
    }

    private void listener() {
        mRgNormalPerson.setOnCheckedChangeListener((group, checkedId) -> {
            normalPersons = Integer.valueOf(group.findViewById(checkedId).getTag().toString());
            Log.d(TAG, "listener: "+normalPersons);
        });

        mRgStudent.setOnCheckedChangeListener((group, checkedId) -> {
            students = Integer.valueOf(group.findViewById(checkedId).getTag().toString());
            Log.d(TAG, "listener: "+students);

        });

        mRgPreferential.setOnCheckedChangeListener((group, checkedId) -> {
            preferentials = Integer.valueOf(group.findViewById(checkedId).getTag().toString());
            Log.d(TAG, "listener: "+preferentials);

        });

        mBtnPersonChoice.setOnClickListener(view -> {
            totalPersons = (normalPersons + students + preferentials);

            if(totalPersons == 0) {
                Toast.makeText(view.getContext(), "인원 선택 후 다시 이용하여 주십시오.", Toast.LENGTH_SHORT).show();
            } else if(8 < totalPersons) {
                Toast.makeText(view.getContext(), "최대 8명까지 선택이 가능합니다.", Toast.LENGTH_SHORT).show();
            } else {
                mBottomSheetDialogFragment.dismiss();
                Intent intent = new Intent(getContext(), SeatChoiceActivity.class);
                intent.putExtra("normalPersons", normalPersons);
                intent.putExtra("students", students);
                intent.putExtra("preferentials", preferentials);
                intent.putExtra("screeningDate", screeningDate);
                intent.putExtra("runningTime", runningTime);
                String jsonData = gson.toJson(timeTable);
                intent.putExtra("timeTable", jsonData);

                startActivity(intent);
            }
        });
    }

    private void downloadTimeTableInfo() {
        long timeTableId = (long) getArguments().getInt("timeTableId");
        screeningDate = getArguments().getString("screeningDate");
        Log.d(TAG, "downloadTimeTableInfo: " + timeTableId);

        TimeTableService timeTableService = TimeTableService.retrofit.create(TimeTableService.class);
        Call<CMRespDto<TimeTable>> call = timeTableService.findByTimeTableId(timeTableId);
        call.enqueue(new Callback<CMRespDto<TimeTable>>() {
            @Override
            public void onResponse(Call<CMRespDto<TimeTable>> call, Response<CMRespDto<TimeTable>> response) {
                CMRespDto<TimeTable> dto = response.body();
                timeTable = dto.getData();

                if(timeTable.getMovie().getAge().equals("연소자관람가")) {
                    for (int i = 0; i < mRgStudent.getChildCount(); i++) {
                        mRgStudent.getChildAt(i).setEnabled(false);
                    }
                }

                String startTime = timeTable.getStartTime();
                String[] startTimeSplit = startTime.split(":");
                int startHour = Integer.parseInt(startTimeSplit[0]);
                int startMinute = Integer.parseInt(startTimeSplit[1]);
                int runTime = timeTable.getMovie().getRunningTime();

                int endTimeToMinute = ((startHour * 60) + (startMinute) + (runTime));
                int endTimeHour = (endTimeToMinute / 60);
                int endTimeMinute = (endTimeToMinute % 60);
                String endTime = "~" + endTimeHour + ":" + endTimeMinute;

                runningTime = startTime + endTime;
                title = timeTable.getMovie().getTitle();
                location = timeTable.getTheater().getLocation();
                hallName = timeTable.getHall().getName();

                mTvMovieTitle.setText(title);
                mTvDate.setText(screeningDate);
                mTvRunningTime.setText(runningTime);
                mTvTheater.setText(location);
                mTvHall.setText(hallName);
            }

            @Override
            public void onFailure(Call<CMRespDto<TimeTable>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신 실패");
                t.printStackTrace();
            }
        });
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        normalPersons = 0;
        students = 0;
        preferentials = 0;
    }
}
