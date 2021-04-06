package com.example.cgvapplication.adapter.ticketing.theater;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.activity.LoginActivity;
import com.example.cgvapplication.fragment.TicketingBottomDialogFragment;
import com.example.cgvapplication.R;
import com.example.cgvapplication.service.TicketingService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.dto.timetable.TicketingTheaterSeatDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class TicketingTheaterSeatAdapter extends RecyclerView.Adapter<TicketingTheaterSeatAdapter.MyViewHolder> {

    private final FragmentManager fm;
    private final List<TimeTableTheaterRespDto> dtos;
    private final int hallId;

    public TicketingTheaterSeatAdapter(FragmentManager fm, List<TimeTableTheaterRespDto> dtos, int hallId) {
        this.fm = fm;
        this.dtos = dtos;
        this.hallId = hallId;
    }

    private Gson gson = new Gson();

    List<TicketingTheaterSeatDto> ticketingTheaterSeats = new ArrayList<>();

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_seat_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(ticketingTheaterSeats.get(position));

    }

    @Override
    public int getItemCount() {

        for (TimeTableTheaterRespDto dto : dtos) {
            if (dto.getHallId().intValue() == hallId) {
                if (ticketingTheaterSeats.isEmpty()) {
                    ticketingTheaterSeats.add(new TicketingTheaterSeatDto(dto.getTimetableId().intValue(), dto.getStartTime(), dto.getRunningTime().intValue(), dto.getSeatCount()));
                } else {
                    boolean isSame = true;
                    for (TicketingTheaterSeatDto seatDto : ticketingTheaterSeats) {
                        if (dto.getStartTime().equals(seatDto.getStartTime())) {
                            isSame = true;
                            break;
                        } else {
                            isSame = false;
                        }
                    }

                    if (!isSame) {
                        ticketingTheaterSeats.add(new TicketingTheaterSeatDto(dto.getTimetableId().intValue(), dto.getStartTime(), dto.getRunningTime().intValue(), dto.getSeatCount()));
                    }
                }
            }
        }

        return ticketingTheaterSeats.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        private final TicketingBottomDialogFragment mTicketingBottomDialogFragment;

        private TextView mTvStartTime, mTvEndTime, mTvExtraSeats, mTvTotalSeats;

        private int timeTableId;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvStartTime = itemView.findViewById(R.id.tv_startTime);
            mTvEndTime = itemView.findViewById(R.id.tv_endTime);
            mTvExtraSeats = itemView.findViewById(R.id.tv_extraSeats);
            mTvTotalSeats = itemView.findViewById(R.id.tv_totalSeats);

            mTicketingBottomDialogFragment = new TicketingBottomDialogFragment();
            itemView.setOnClickListener(this::onClick);

        }

        private void setItem(TicketingTheaterSeatDto dto) {
            mTvStartTime.setText(dto.getStartTime());
            mTvEndTime.setText(endTime(dto));
            mTvTotalSeats.setText(dto.getSeatCount().toString());
            timeTableId = dto.getTimeTableId();

            TicketingService ticketingService = TicketingService.retrofit.create(TicketingService.class);
            Call<CMRespDto<Long>> call = ticketingService.findByTimeTableId(timeTableId);
            call.enqueue(new Callback<CMRespDto<Long>>() {
                @Override
                public void onResponse(Call<CMRespDto<Long>> call, Response<CMRespDto<Long>> response) {
                    CMRespDto<Long> reservationNums = response.body();
                    int reservationNum = reservationNums.getData().intValue();
                    mTvExtraSeats.setText((dto.getSeatCount().intValue() - reservationNum) + "");
                }

                @Override
                public void onFailure(Call<CMRespDto<Long>> call, Throwable t) {

                }
            });

        }

        private void onClick(View view) {
            String token = SharedPreference.getAttribute(view.getContext(), "Authorization");
            if (token == null) {
                Intent intent = new Intent(view.getContext(), LoginActivity.class);
                view.getContext().startActivity(intent);
            } else {
                mTicketingBottomDialogFragment.show(fm, "bottomSheet");
                Bundle bundle = new Bundle(2);
                bundle.putInt("timeTableId", timeTableId);
                bundle.putString("screeningDate", dtos.get(0).getScreeningDate());
                mTicketingBottomDialogFragment.setArguments(bundle);
            }
        }

        private String endTime(TicketingTheaterSeatDto dto) {
            String startTime = dto.getStartTime();
            String[] startTimeSplit = startTime.split(":");
            int startHour = Integer.parseInt(startTimeSplit[0]);
            int startMinute = Integer.parseInt(startTimeSplit[1]);
            int runningTime = dto.getRunningTime();

            int endTimeToMinute = ((startHour * 60) + (startMinute) + (runningTime));
            int endTimeHour = (endTimeToMinute / 60);
            int endTimeMinute = (endTimeToMinute % 60);
            String endTime = "~" + endTimeHour + ":" + endTimeMinute;

            return endTime;
        }

    }
}
