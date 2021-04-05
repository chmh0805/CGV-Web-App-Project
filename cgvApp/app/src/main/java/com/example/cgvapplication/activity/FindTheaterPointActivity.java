package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.findtheater.FindTheaterPointAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.service.TheaterService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.theater.TheaterNameRespDto;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FindTheaterPointActivity extends AppCompatActivity {

    private static final String TAG = "FindTheaterPointActivity";
    private RecyclerView mRvFindTheaterPoint;

    private Toolbar mToolbarFindTheater;
    private LinearLayout mLinearNavigation;
    private MyNavigationHelper myNavigationHelper;

    @SuppressLint("LongLogTag")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_theater_point);

        setSupportActionBar(mToolbarFindTheater);

        String area = getIntent().getStringExtra("area");
        //Log.d(TAG, "onCreate: "+area);
        download(area);
        init();

        myNavigationHelper.enable(mLinearNavigation);

    }

    public void init() {
        mRvFindTheaterPoint = findViewById(R.id.rv_find_theater_point);
        mToolbarFindTheater = findViewById(R.id.toolbar_find_theater);
        mLinearNavigation = findViewById(R.id.linear_navigation);

        myNavigationHelper = new MyNavigationHelper(FindTheaterPointActivity.this);


    }

    public void download(String area) {

        TheaterService theaterService = TheaterService.retrofit.create(TheaterService.class);
        Call<CMRespDto<List<TheaterNameRespDto>>> call = theaterService.findAllName(area);
        call.enqueue(new Callback<CMRespDto<List<TheaterNameRespDto>>>() {
            @SuppressLint("LongLogTag")
            @Override
            public void onResponse(Call<CMRespDto<List<TheaterNameRespDto>>> call, Response<CMRespDto<List<TheaterNameRespDto>>> response) {
                List<TheaterNameRespDto> theaterNameRespDtos = response.body().getData();
                Log.d(TAG, "onResponse: 통신셩공"+response.body());
                LinearLayoutManager manager = new LinearLayoutManager(FindTheaterPointActivity.this, RecyclerView.VERTICAL, false);
                FindTheaterPointAdapter adapter = new FindTheaterPointAdapter();
                adapter.setTheaterNameRespDtos(theaterNameRespDtos);
                mRvFindTheaterPoint.setAdapter(adapter);
                mRvFindTheaterPoint.setLayoutManager(manager);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<TheaterNameRespDto>>> call, Throwable t) {

            }
        });
    }
}