package com.example.cgvapplication;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.ListView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.adapter.TicketingCalendarListAdapter;
import com.example.cgvapplication.adapter.TicketingMovieAdapter;
import com.example.cgvapplication.adapter.TicketingTheaterChoiceAdapter;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class FragTicketingTheater extends Fragment {

    private final FragTicketingTheater mFragTicketingTheater = this;
    private BottomSheetDialog mBottomSheetDialog;
    private Button mBtnSelectTheater;
    private ListView mLvTheater;
    private ImageView mIvClose;
    private RecyclerView mRvCalendar, mRvMovie;
    private FragmentManager fm;

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

        for(int i=0; i<7; i++) {
            mLocalDates.add(LocalDate.now().plusDays(i));
        }
        TicketingCalendarListAdapter mTicketingCalendarListAdapter = new TicketingCalendarListAdapter(mLocalDates);
        mRvCalendar.setAdapter(mTicketingCalendarListAdapter);
        mBtnSelectTheater.setOnClickListener(v -> {
            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(mFragTicketingTheater.getContext()));
            @SuppressLint("InflateParams") View view1 = getLayoutInflater().inflate(R.layout.ticketing_theater_bottom_sheet, null);
            mLvTheater = view1.findViewById(R.id.lv_theater);
            mBottomSheetDialog.setContentView(view1);
            mBottomSheetDialog.show();

            List<String> theater = new ArrayList<>();
            theater.add("서면");
            theater.add("부산대");
            theater.add("동의대");
            theater.add("화명");
            theater.add("강남");
            ArrayAdapter<String> adapter = new ArrayAdapter<>(mFragTicketingTheater.getContext(), android.R.layout.simple_list_item_1, theater);
            mLvTheater.setAdapter(adapter);
            mIvClose = view1.findViewById(R.id.iv_close);
            mIvClose.setOnClickListener(view2 -> mBottomSheetDialog.dismiss());

        });
        return view;
    }

    private void init(View view) {
        RecyclerView mRvTheaterCheck = view.findViewById(R.id.rv_theater_check);
        mBtnSelectTheater = view.findViewById(R.id.btn_select_theater);
        mRvCalendar = view.findViewById(R.id.rv_calendar);
        mRvMovie = view.findViewById(R.id.rv_movie);
        LinearLayoutManager calendarManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        LinearLayoutManager manager = new LinearLayoutManager(mFragTicketingTheater.getContext(), RecyclerView.HORIZONTAL, false);
        LinearLayoutManager movieManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvCalendar.setLayoutManager(calendarManager);
        mRvMovie.setLayoutManager(movieManager);


        mRvTheaterCheck.setLayoutManager(manager);
        TicketingTheaterChoiceAdapter mTicketingTheaterChoiceAdapter = new TicketingTheaterChoiceAdapter();
        TicketingMovieAdapter mTicketingMovieAdapter = new TicketingMovieAdapter(fm);
        mRvMovie.setAdapter(mTicketingMovieAdapter);
        mRvTheaterCheck.setAdapter(mTicketingTheaterChoiceAdapter);
    }
}
