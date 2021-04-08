package com.example.cgvapplication.adapter.ticketing.theater;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.fragment.FragTicketingTheater;
import com.example.cgvapplication.service.dto.timetable.TicketingTheaterHallDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

public class TicketingTheaterHallListAdapter extends RecyclerView.Adapter<TicketingTheaterHallListAdapter.MyViewHolder> {

    private static final String TAG = "TheaterHallListAdapter2";

    private final FragmentManager fm;
    private final List<TimeTableTheaterRespDto> dtos;

    public TicketingTheaterHallListAdapter(FragmentManager fm, List<TimeTableTheaterRespDto> dtos) {
        this.fm = fm;
        this.dtos = dtos;
    }

    List<TicketingTheaterHallDto> hallDtos = new ArrayList<>();

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_hall_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(hallDtos.get(position));
    }

    @Override
    public int getItemCount() {

        Log.d(TAG, "getItemCount: " +dtos);

        for (TimeTableTheaterRespDto dto : dtos) {
            if (hallDtos.isEmpty()) {
                hallDtos.add(new TicketingTheaterHallDto(dto.getHallId().intValue(), dto.getHallName()));
            } else {
                boolean isSame = true;
                for (TicketingTheaterHallDto hallDto : hallDtos) {
                    if (dto.getHallId().intValue() == hallDto.getHallId()) {
                        isSame = true;
                        break;
                    } else {
                        isSame = false;
                    }
                }

                if (!isSame) {
                    hallDtos.add(new TicketingTheaterHallDto(dto.getHallId().intValue(), dto.getHallName()));
                }
            }
        }

        return hallDtos.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvHall;
        private RecyclerView mRvSeat;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvHall = itemView.findViewById(R.id.tv_hall);
            mRvSeat = itemView.findViewById(R.id.rv_seat);
        }

        public void setItem(TicketingTheaterHallDto dto) {
            mTvHall.setText(dto.getHallName());

            List<TimeTableTheaterRespDto> reqDtos = new ArrayList<>();
            for (TimeTableTheaterRespDto respDto : dtos) {
                if(respDto.getHallName().equals(mTvHall.getText().toString())) {
                    reqDtos.add(respDto);
                }
            }

            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.HORIZONTAL, false);
            TicketingTheaterSeatAdapter mTicketingTheaterSeatAdapter = new TicketingTheaterSeatAdapter(fm, dtos);
            mRvSeat.setLayoutManager(manager);
            mRvSeat.setAdapter(mTicketingTheaterSeatAdapter);
        }
    }
}
