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

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.annotation.RequiresApi;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.ticketing.movie.TicketingCalendarListAdapter;
import com.example.cgvapplication.adapter.ticketing.movie.TicketingMoviePosterAdapter;
import com.example.cgvapplication.adapter.ticketing.movie.TicketingTheaterAdapter;

import com.example.cgvapplication.model.hall.Hall;
import com.example.cgvapplication.model.movie.BoxOfficeMovie;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.model.timetable.TimeTable;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.TheaterService;
import com.example.cgvapplication.service.TimeTableService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableHallRespDto;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Objects;

import lombok.SneakyThrows;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragTicketingMovie extends Fragment {
    private static final String TAG = "FragTicketingMovie";
    private final FragTicketingMovie fragTicketingMovie = this;
    private TextView mTvMovieTitle, mTvSelectDay;
    private RecyclerView mRvCalendar;
    private Button mBtnSelectTheater;
    private BottomSheetDialog mBottomSheetDialog;
    private ListView mLvTheater;
    private ImageView mIvClose;
    private FragmentManager fm;
    private final String docId;
    private RecyclerView mRvTheater, mRvTicketingPosterList;

    private String currentDate = null;
    private String currentDate2 = null;
    private String selectDate = null;
    private String weekDay = null;
    private String day = null;
    private String month = null;
    private String year = null;
    private String afterDate = null;
    private List<String> theater;
    //private List<Integer> theaterId;
    private int rankNum;
    private long theaterId = 0;
    private List<TimeTable> timeTables;
    private List<Hall> halls;
    private List<TimeTableHallRespDto> timeTableHallRespDtos;
    private int position;
    public FragTicketingMovie(FragmentManager fm, String docId) {
        this.fm = fm;
        this.docId = docId;
    }
    @SneakyThrows
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
        TicketingCalendarListAdapter mTicketingCalendarListAdapter = new TicketingCalendarListAdapter(mLocalDates);
        mRvCalendar.setAdapter(mTicketingCalendarListAdapter);
        currentDate();

        listener();
        return view;
    }

    private void currentDate() throws ParseException {
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

    public void setDate(String selectDay, String selectWeekDay) throws ParseException {
        day = selectDay;
        weekDay = selectWeekDay;
        currentDate = year + "." + month + "." + selectDay + " (" + selectWeekDay + ")";
        currentDate2 = year + "." + month + "." + selectDay;

        SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyy.MM.dd");
        Date beforeDate = beforeFormat.parse(currentDate2);

        SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-MM-dd");
        afterDate = afterFormat.format(beforeDate);
        timeTableDownload(theaterId, afterDate);

        mTvSelectDay.setText(currentDate);
       // hallList(docId, theaterId, position);
    }
    private void init(View view) {
        mTvMovieTitle = view.findViewById(R.id.tv_movie_title);
        mRvTicketingPosterList = view.findViewById(R.id.rv_ticketing_poster_list);
        mRvCalendar = view.findViewById(R.id.rv_calendar);
        mBtnSelectTheater = view.findViewById(R.id.btn_select_theater);
        mRvTheater = view.findViewById(R.id.rv_theater);
        mTvSelectDay = view.findViewById(R.id.tv_select_day);

        LinearLayoutManager calendarManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
        LinearLayoutManager theaterManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);

        mRvCalendar.setLayoutManager(calendarManager);
        mRvTheater.setLayoutManager(theaterManager);


        download(view);


    }

    private void download(View view) {
        TimeTableService timeTableService = TimeTableService.retrofit.create(TimeTableService.class);
        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<List<MovieBoxOfficeRespDto>>> callBoxOfficeMovieAll = movieService.findBoxOfficeAll();
        callBoxOfficeMovieAll.enqueue(new Callback<CMRespDto<List<MovieBoxOfficeRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Response<CMRespDto<List<MovieBoxOfficeRespDto>>> response) {
                Log.d(TAG, "onResponse: 통신성공"+response.body());
                List<MovieBoxOfficeRespDto> movieBoxOfficeRespDtos = response.body().getData();
                LinearLayoutManager posterManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
                mRvTicketingPosterList.setLayoutManager(posterManager);
                TicketingMoviePosterAdapter mTicketingMoviePosterAdapter = new TicketingMoviePosterAdapter(movieBoxOfficeRespDtos);
                mRvTicketingPosterList.setAdapter(mTicketingMoviePosterAdapter);

            }

            @Override
            public void onFailure(Call<CMRespDto<List<MovieBoxOfficeRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

        Call<CMRespDto<BoxOfficeMovie>> callBoxOfficeMovie = movieService.findBoxOfficeById(docId);
        callBoxOfficeMovie.enqueue(new Callback<CMRespDto<BoxOfficeMovie>>() {
            @Override
            public void onResponse(Call<CMRespDto<BoxOfficeMovie>> call, Response<CMRespDto<BoxOfficeMovie>> response) {
                Log.d(TAG, "onResponse: 통신성공: 박스오피스하나:"+response.body());
                rankNum = response.body().getData().getRankNum();
                mRvTicketingPosterList.scrollToPosition(response.body().getData().getRankNum()-1);
            }

            @Override
            public void onFailure(Call<CMRespDto<BoxOfficeMovie>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

        Call<CMRespDto<Movie>> callMovie = movieService.findById(docId);
        callMovie.enqueue(new Callback<CMRespDto<Movie>>() {
            @Override
            public void onResponse(Call<CMRespDto<Movie>> call, Response<CMRespDto<Movie>> response) {
                Log.d(TAG, "onResponse: 통신성공: "+response.body());
                mTvMovieTitle.setText(response.body().getData().getTitle());
            }

            @Override
            public void onFailure(Call<CMRespDto<Movie>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

    }

    private void theaterDownload() {
        TheaterService theaterService = TheaterService.retrofit.create(TheaterService.class);
        Call<CMRespDto<List<Theater>>> call = theaterService.findAll();
        call.enqueue(new Callback<CMRespDto<List<Theater>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<Theater>>> call, Response<CMRespDto<List<Theater>>> response) {
                List<Theater> theaters = response.body().getData();
                Log.d(TAG, "onResponse: 통신성공: theaters: "+theaters);
                theater = new ArrayList<>();
                for(int i=0; i<theaters.size(); i++) {
                    theater.add(theaters.get(i).getName());
                }
                ArrayAdapter<String> adapter = new ArrayAdapter<>(fragTicketingMovie.getContext(), android.R.layout.simple_list_item_1, theater);
                mLvTheater.setAdapter(adapter);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<Theater>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }

    private void timeTableDownload(long theaterId, String date) {
        Log.d(TAG, "timeTableDownload: "+docId+": "+theaterId+": "+date);
        TimeTableService timeTableService = TimeTableService.retrofit.create(TimeTableService.class);
        Call<CMRespDto<List<TimeTable>>> callTimeTable = timeTableService.findByAllInfos(docId, theaterId, date);
        callTimeTable.enqueue(new Callback<CMRespDto<List<TimeTable>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<TimeTable>>> call, Response<CMRespDto<List<TimeTable>>> response) {
                Log.d(TAG, "onResponse: 통신성공: 타임테이블: "+response.body());
                timeTables = response.body().getData();

            }

            @Override
            public void onFailure(Call<CMRespDto<List<TimeTable>>> call, Throwable t) {

            }
        });

    }


    public void hallList(String movieId, long theaterId, int position) {
        TimeTableService timeTableService = TimeTableService.retrofit.create(TimeTableService.class);
        Call<CMRespDto<List<TimeTableHallRespDto>>> call = timeTableService.findHallsByMovieIdTheaterId(movieId, theaterId, afterDate);
        call.enqueue(new Callback<CMRespDto<List<TimeTableHallRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<TimeTableHallRespDto>>> call, Response<CMRespDto<List<TimeTableHallRespDto>>> response) {
                Log.d(TAG, "onResponse: 통신성공: "+response.body());
                timeTableHallRespDtos = response.body().getData();
                TicketingTheaterAdapter mTicketingTheaterAdapter = new TicketingTheaterAdapter(fm, theater.get(position), timeTableHallRespDtos);
                mRvTheater.setAdapter(mTicketingTheaterAdapter);
                Log.d(TAG, "onResponse: size"+timeTableHallRespDtos.size());
            }

            @Override
            public void onFailure(Call<CMRespDto<List<TimeTableHallRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }

    private void listener() {
        mBtnSelectTheater.setOnClickListener(v -> {
            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(fragTicketingMovie.getContext()));

            // 극장 선택
            @SuppressLint("InflateParams") View bottomSheetView = getLayoutInflater().inflate(R.layout.ticketing_theater_bottom_sheet, null);
            mLvTheater = bottomSheetView.findViewById(R.id.lv_theater);
            theaterDownload();
            mBottomSheetDialog.setContentView(bottomSheetView);
            mBottomSheetDialog.show();

            mIvClose = bottomSheetView.findViewById(R.id.iv_close);
            mIvClose.setOnClickListener(view2 -> mBottomSheetDialog.dismiss());

            mLvTheater.setOnItemClickListener((parent, view1, position, id) -> {
                mBottomSheetDialog.dismiss();
                Log.d(TAG, "listener: "+theater.get(position));
                this.position = position;
                theaterId = position + 1;
                timeTableDownload(theaterId, afterDate);
                hallList(docId, theaterId, position);


            });
        });
    }

}
