package com.example.cgvapplication.fragment;

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
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.ticketing.theater.TicketingTheaterCalendarListAdapter;
import com.example.cgvapplication.adapter.ticketing.TicketingMoviePosterAdapter;
import com.example.cgvapplication.adapter.ticketing.movie.TicketingTheaterAdapter;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class FragTicketingMovie extends Fragment {
    private static final String TAG = "FragTicketingMovie";
    private final FragTicketingMovie fragTicketingMovie = this;
    private TextView mTvMovieTitle;
    private RecyclerView mRvCalendar;
    private Button mBtnSelectTheater;
    private BottomSheetDialog mBottomSheetDialog;
    private ListView mLvTheater;
    private ImageView mIvClose;
    private FragmentManager fm;

    public FragTicketingMovie(FragmentManager fm) {
        this.fm = fm;
    }
    @RequiresApi(api = Build.VERSION_CODES.O)
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_ticketing_movie, container, false);
        init(view);

        List<LocalDate> mLocalDates = new ArrayList<>();
        for(int i=0; i<7; i++) {
            mLocalDates.add(LocalDate.now().plusDays(i));
        }
        mTvMovieTitle.setSelected(true);
        TicketingTheaterCalendarListAdapter mTicketingCalendarListAdapter = new TicketingTheaterCalendarListAdapter(mLocalDates);
        mRvCalendar.setAdapter(mTicketingCalendarListAdapter);
        mBtnSelectTheater.setOnClickListener(v -> {
            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(fragTicketingMovie.getContext()));

            // 극장 선택
            @SuppressLint("InflateParams") View bottomSheetView = getLayoutInflater().inflate(R.layout.ticketing_theater_bottom_sheet, null);
            mLvTheater = bottomSheetView.findViewById(R.id.lv_theater);
            mBottomSheetDialog.setContentView(bottomSheetView);
            mBottomSheetDialog.show();

            List<String> theater = new ArrayList<>();
            theater.add("서면");
            theater.add("부산대");
            theater.add("동의대");
            theater.add("화명");
            theater.add("강남");
            ArrayAdapter<String> adapter = new ArrayAdapter<>(fragTicketingMovie.getContext(), android.R.layout.simple_list_item_1, theater);
            mLvTheater.setAdapter(adapter);
            mIvClose = bottomSheetView.findViewById(R.id.iv_close);
            mIvClose.setOnClickListener(view2 -> mBottomSheetDialog.dismiss());

        });
        return view;
    }

    private void init(View view) {
        mTvMovieTitle = view.findViewById(R.id.tv_movie_title);
        RecyclerView mRvTicketingPosterList = view.findViewById(R.id.rv_ticketing_poster_list);
        mRvCalendar = view.findViewById(R.id.rv_calendar);
        mBtnSelectTheater = view.findViewById(R.id.btn_select_theater);
        RecyclerView mRvTheater = view.findViewById(R.id.rv_theater);

        LinearLayoutManager posterManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        LinearLayoutManager calendarManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        LinearLayoutManager theaterManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);

        mRvTicketingPosterList.setLayoutManager(posterManager);
        mRvCalendar.setLayoutManager(calendarManager);
        mRvTheater.setLayoutManager(theaterManager);
        TicketingMoviePosterAdapter mTicketingMoviePosterAdapter = new TicketingMoviePosterAdapter();
        mRvTicketingPosterList.setAdapter(mTicketingMoviePosterAdapter);


        TicketingTheaterAdapter mTicketingTheaterAdapter = new TicketingTheaterAdapter(fm);
        mRvTheater.setAdapter(mTicketingTheaterAdapter);
    }
}
