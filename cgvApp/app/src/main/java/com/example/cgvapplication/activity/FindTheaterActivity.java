package com.example.cgvapplication.activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.LinearLayout;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.findtheater.FindTheaterLocationAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.TheaterService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.theater.TheaterAreaRespDto;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FindTheaterActivity extends AppCompatActivity {

    private static final String TAG = "FindTheaterActivity";

    private FindTheaterActivity mContext = FindTheaterActivity.this;

    private Toolbar mToolbarFindTheater;
    private MyNavigationHelper myNavigationHelper;
    private LinearLayout mLinearNavigation;
    private List<String> mLocations;
    private RecyclerView mRvFindTheaterLocation, mRvFindTheaterPoint;
    private FindTheaterLocationAdapter adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find_theater);

        init();


    }

    private void init() {
        setContentView(R.layout.activity_find_theater);

        mToolbarFindTheater = findViewById(R.id.toolbar_find_theater);
        myNavigationHelper = new MyNavigationHelper(mContext);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mRvFindTheaterLocation = findViewById(R.id.rv_find_theater_location);

        mLocations = new ArrayList<>();

        setSupportActionBar(mToolbarFindTheater);
        adapter = new FindTheaterLocationAdapter(mContext);
        myNavigationHelper.enable(mLinearNavigation);


        download();
    }


    public void findTheaterPoint(String location) {
        Intent intent = new Intent(mContext, FindTheaterPointActivity.class);
        intent.putExtra("location", location);
        startActivity(intent);
    }

    private void download() {
        TheaterService theaterService = TheaterService.retrofit.create(TheaterService.class);

        Call<CMRespDto<List<TheaterAreaRespDto>>> call = theaterService.findAllArea();
        call.enqueue(new Callback<CMRespDto<List<TheaterAreaRespDto>>>() {
            @Override
            public void onResponse(Call<CMRespDto<List<TheaterAreaRespDto>>> call, Response<CMRespDto<List<TheaterAreaRespDto>>> response) {
                CMRespDto<List<TheaterAreaRespDto>> cmRespDto = response.body();
                Log.d(TAG, "onResponse: 통신성공"+response.body());
                List<TheaterAreaRespDto> theaterAreaRespDtos = cmRespDto.getData();

                adapter.setTheaterAreas(theaterAreaRespDtos);

                LinearLayoutManager manager = new LinearLayoutManager(FindTheaterActivity.this, RecyclerView.VERTICAL, false);
                mRvFindTheaterLocation.setAdapter(adapter);
                mRvFindTheaterLocation.setLayoutManager(manager);
            }

            @Override
            public void onFailure(Call<CMRespDto<List<TheaterAreaRespDto>>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });

    }
}