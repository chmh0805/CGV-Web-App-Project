package com.example.cgvapplication.fragment;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.ticketing.theater.TicketingTheaterCalendarListAdapter;
import com.example.cgvapplication.adapter.ticketing.theater.TicketingTheaterMovieAdapter;
import com.example.cgvapplication.adapter.ticketing.theater.TicketingTheaterChoiceAdapter;
import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.TheaterService;
import com.example.cgvapplication.service.TimeTableService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterReqDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragTicketingTheater extends Fragment {

    private static final String TAG = "FragTicketingTheater2";

    private final FragTicketingTheater mFragTicketingTheater = this;
    private BottomSheetDialog mBottomSheetDialog;
    private Button mBtnSelectTheater;
    private ListView mLvTheater;
    private ImageView mIvClose;
    private TextView mTvSelectDay;
    private RecyclerView mRvCalendar, mRvMovie;
    private FragmentManager fm;
    private RecyclerView mRvTheaterCheck;

    private String location = null;
    private String currentDate = null;
    private String selectDate = null;
    private String weekDay = null;
    private String day = null;
    private String month = null;
    private String year = null;

    private List<Theater> theaters = new ArrayList<>();
    private List<String> locations = new ArrayList<>();
    private List<TimeTableTheaterRespDto> TimeTableTheaterRespDtos = new ArrayList<>();

    private TicketingTheaterChoiceAdapter mTicketingTheaterChoiceAdapter;
    private TicketingTheaterMovieAdapter mTicketingTheaterMovieAdapter;

    public FragTicketingTheater(FragmentManager fm) {
        this.fm = fm;
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_ticketing_theater, container, false);

        init(view);

        List<LocalDate> mLocalDates = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            mLocalDates.add(LocalDate.now().plusDays(i));
        }

        TicketingTheaterCalendarListAdapter mTicketingTheaterCalendarListAdapter = new TicketingTheaterCalendarListAdapter(mFragTicketingTheater, mLocalDates);
        mRvCalendar.setAdapter(mTicketingTheaterCalendarListAdapter);

        currentDate();
        listener();

        return view;
    }

    private void currentDate() {
        Date currentTime = Calendar.getInstance().getTime();
        SimpleDateFormat weekDayFormat = new SimpleDateFormat("EE", Locale.getDefault());
        SimpleDateFormat dayFormat = new SimpleDateFormat("dd", Locale.getDefault());
        SimpleDateFormat monthFormat = new SimpleDateFormat("MM", Locale.getDefault());
        SimpleDateFormat yearFormat = new SimpleDateFormat("yyyy", Locale.getDefault());

        weekDay = weekDayFormat.format(currentTime);
        day = dayFormat.format(currentTime);
        month = monthFormat.format(currentTime);
        year = yearFormat.format(currentTime);

        Log.d(TAG, "currentDate: " + currentDate);

        setDate(day, weekDay);
    }

    public void setDate(String selectDay, String selectWeekDay) {
        day = selectDay;
        weekDay = selectWeekDay;
        currentDate = year + "." + month + "." + selectDay + " (" + selectWeekDay + ")";

        mTvSelectDay.setText(currentDate);
    }

    private void init(View view) {
        mRvCalendar = view.findViewById(R.id.rv_calendar);
        mRvTheaterCheck = view.findViewById(R.id.rv_theater_check);
        mBtnSelectTheater = view.findViewById(R.id.btn_select_theater);
        mRvMovie = view.findViewById(R.id.rv_movie);
        mTvSelectDay = view.findViewById(R.id.tv_select_day);

        LinearLayoutManager calendarManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        mRvCalendar.setLayoutManager(calendarManager);

        LinearLayoutManager movieManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvMovie.setLayoutManager(movieManager);

        LinearLayoutManager manager = new LinearLayoutManager(mFragTicketingTheater.getContext(), RecyclerView.HORIZONTAL, false);
        mRvTheaterCheck.setLayoutManager(manager);
        mTicketingTheaterChoiceAdapter = new TicketingTheaterChoiceAdapter(mFragTicketingTheater);
        mRvTheaterCheck.setAdapter(mTicketingTheaterChoiceAdapter);
    }

    private void listener() {

        mBtnSelectTheater.setOnClickListener(v -> {

            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(mFragTicketingTheater.getContext()));
            @SuppressLint("InflateParams") View view = getLayoutInflater().inflate(R.layout.ticketing_theater_bottom_sheet, null);
            mLvTheater = view.findViewById(R.id.lv_theater);
            mBottomSheetDialog.setContentView(view);
            mBottomSheetDialog.show();

            TheaterService theaterService = TheaterService.retrofit.create(TheaterService.class);
            Call<CMRespDto<List<Theater>>> call = theaterService.findAll();
            call.enqueue(new Callback<CMRespDto<List<Theater>>>() {
                @Override
                public void onResponse(Call<CMRespDto<List<Theater>>> call, Response<CMRespDto<List<Theater>>> response) {
                    CMRespDto<List<Theater>> dto = response.body();
                    theaters = dto.getData();
                    locations = new ArrayList<>();
                    for (Theater theater : theaters) {
                        locations.add(theater.getLocation());
                    }
                    ArrayAdapter<String> adapter = new ArrayAdapter<>(mFragTicketingTheater.getContext(), android.R.layout.simple_list_item_1, locations);
                    mLvTheater.setAdapter(adapter);
                }

                @Override
                public void onFailure(Call<CMRespDto<List<Theater>>> call, Throwable t) {

                }
            });

            mIvClose = view.findViewById(R.id.iv_close);
            mIvClose.setOnClickListener(v1 -> mBottomSheetDialog.dismiss());

            mLvTheater.setOnItemClickListener((parent, view1, position, id) -> {
                List<String> theaterLocations = mTicketingTheaterChoiceAdapter.findAll();

                if (theaterLocations.isEmpty()) {
                    mTicketingTheaterChoiceAdapter.addItem(locations.get(position));
                    mBottomSheetDialog.dismiss();
                } else {
                    boolean isTheater = false;

                    for (String theaterLocation : theaterLocations) {
                        if (theaterLocation.equals(locations.get(position))) {
                            isTheater = true;
                            break;
                        } else {
                            isTheater = false;

                        }
                    }

                    if(isTheater) {
                        Toast.makeText(view1.getContext(), "이미 등록한 극장입니다.", Toast.LENGTH_SHORT).show();
                    } else {
                        mTicketingTheaterChoiceAdapter.addItem(locations.get(position));
                        mBottomSheetDialog.dismiss();
                    }
                }
            });
        });
    }

    public void downloadTimeTable(String location) {
        this.location = location;
        TimeTableTheaterReqDto dto = new TimeTableTheaterReqDto(this.location);

        TimeTableService timeTableService = TimeTableService.retrofit.create(TimeTableService.class);
        Call<CMRespDto<List<TimeTableTheaterRespDto>>> call = timeTableService.findAllByTheaterLocation(dto);
        call.enqueue(new Callback<CMRespDto<List<TimeTableTheaterRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<TimeTableTheaterRespDto>>> call, Response<CMRespDto<List<TimeTableTheaterRespDto>>> response) {
                CMRespDto<List<TimeTableTheaterRespDto>> dtos = response.body();
                TimeTableTheaterRespDtos = null;
                TimeTableTheaterRespDtos = dtos.getData();
                Log.d(TAG, "onResponse: "+TimeTableTheaterRespDtos);
                selectLocation();
            }

            @Override
            public void onFailure(Call<CMRespDto<List<TimeTableTheaterRespDto>>> call, Throwable t) {

            }
        });
    }

    public void selectLocation() {
        String searchDate = year + "-" + month + "-" + day;
        Log.d(TAG, "selectLocation: " + searchDate);

        List<TimeTableTheaterRespDto> dtos = new ArrayList<>();

        for (TimeTableTheaterRespDto dto : TimeTableTheaterRespDtos) {
            dto.setScreeningDate(currentDate);
            if (dto.getDate().equals(searchDate)) {
                dtos.add(dto);
            }
        }

        mTicketingTheaterMovieAdapter = new TicketingTheaterMovieAdapter(fm, mFragTicketingTheater, dtos);
        mRvMovie.setAdapter(mTicketingTheaterMovieAdapter);
    }
}