package com.example.cgvapplication.activity;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Toast;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.FrequentlyCGV.FrequentlyCGVAdapter;
import com.example.cgvapplication.helper.MyNavigationHelper;
import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.TheaterService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.google.android.material.bottomsheet.BottomSheetDialog;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FrequentlyCgvActivity extends AppCompatActivity {

    private static final String TAG = "FrequentlyCgvActivity2";

    private Context mContext = FrequentlyCgvActivity.this;

    private LinearLayout btnAddCGV, mLinearNavigation;
    private RecyclerView rvFrequentlyCGVContainer;

    private Toolbar mToolbarFrequentlyCgv;
    private MyNavigationHelper mMyNavigationHelper;

    private ImageView mIvClose;
    private ListView mLvTheaterLocation;

    private FrequentlyCGVAdapter mFrequentlyCGVAdapter;

    private List<Theater> theaters = new ArrayList<>();
    private List<String> locations = new ArrayList<>();

    private BottomSheetDialog mBottomSheetDialog;

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_frequently_cgv);

        init();
        listener();
    }

    public void init() {
        rvFrequentlyCGVContainer = findViewById(R.id.rv_frequently_cgv_container);
        btnAddCGV = findViewById(R.id.btn_add_cgv);

        mToolbarFrequentlyCgv = findViewById(R.id.toolbar_frequently_cgv);
        mLinearNavigation = findViewById(R.id.linear_navigation);
        mMyNavigationHelper = new MyNavigationHelper(FrequentlyCgvActivity.this);

        setSupportActionBar(mToolbarFrequentlyCgv);
        mMyNavigationHelper.enable(mLinearNavigation);

        LinearLayoutManager manager = new LinearLayoutManager(FrequentlyCgvActivity.this, RecyclerView.VERTICAL, false);
        mFrequentlyCGVAdapter = new FrequentlyCGVAdapter(locations);

        rvFrequentlyCGVContainer.setAdapter(mFrequentlyCGVAdapter);
        rvFrequentlyCGVContainer.setLayoutManager(manager);
    }

    private void listener() {

        btnAddCGV.setOnClickListener(v -> {
            mBottomSheetDialog = new BottomSheetDialog(Objects.requireNonNull(mContext));
            @SuppressLint("InflateParams") View view = getLayoutInflater().inflate(R.layout.frequently_cgv_bottom_sheet, null);
            mLvTheaterLocation = view.findViewById(R.id.lv_theater_location);
            mBottomSheetDialog.setContentView(view);
            mBottomSheetDialog.show();

            TheaterService theaterService = TheaterService.retrofit.create(TheaterService.class);
            Call<CMRespDto<List<Theater>>> call = theaterService.findAll();
            call.enqueue(new Callback<CMRespDto<List<Theater>>>() {
                @Override
                public void onResponse(Call<CMRespDto<List<Theater>>> call, Response<CMRespDto<List<Theater>>> response) {
                    CMRespDto<List<Theater>> dto = response.body();
                    theaters = dto.getData();
                    Log.d(TAG, "onResponse: " + theaters);
                    locations = new ArrayList<>();
                    for (Theater theater : theaters) {
                        locations.add(theater.getLocation());
                    }
                    ArrayAdapter<String> freqAdapter = new ArrayAdapter<>(mContext, android.R.layout.simple_list_item_activated_1, locations);
                    mLvTheaterLocation.setAdapter(freqAdapter);
                }

                @Override
                public void onFailure(Call<CMRespDto<List<Theater>>> call, Throwable t) {

                }
            });
            mIvClose = view.findViewById(R.id.iv_close);
            mIvClose.setOnClickListener(v1 -> mBottomSheetDialog.dismiss());

            mLvTheaterLocation.setOnItemClickListener((parent, view1, position, id) -> {

                List<String> frequentlyCGVs = mFrequentlyCGVAdapter.findAll();

                if (frequentlyCGVs.isEmpty()) {
                    mFrequentlyCGVAdapter.addItem(locations.get(position));
                    mBottomSheetDialog.dismiss();
                } else {
                    if (frequentlyCGVs.size() == 5) {
                        Toast.makeText(view1.getContext(), "자주가는 CGV가 5개 등록되어 있습니다.\n삭제 후 다시 시도하시기 바랍니다.", Toast.LENGTH_SHORT).show();
                    } else {
                        for (String theaterLocation : frequentlyCGVs) {
                            if (theaterLocation.equals(locations.get(position))) {
                                mFrequentlyCGVAdapter.removeItem(locations.get(position));
                                mBottomSheetDialog.dismiss();
                            } else {
                                mFrequentlyCGVAdapter.addItem(locations.get(position));
                                mBottomSheetDialog.dismiss();
                            }
                        }
                    }

                }
            });
        });
    }
}