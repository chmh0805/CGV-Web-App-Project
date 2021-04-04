package com.example.cgvapplication.adapter.ticketing.theater;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.fragment.TicketingBottomDialogFragment;
import com.example.cgvapplication.R;
import com.example.cgvapplication.service.dto.timetable.TicketingTheaterHallDto;
import com.example.cgvapplication.service.dto.timetable.TicketingTheaterSeatDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;

import java.util.ArrayList;
import java.util.List;

public class TicketingTheaterSeatAdapter extends RecyclerView.Adapter<TicketingTheaterSeatAdapter.MyViewHolder> {

    private final FragmentManager fm;
    private final List<TimeTableTheaterRespDto> dtos;
    private final int hallId;

    public TicketingTheaterSeatAdapter(FragmentManager fm, List<TimeTableTheaterRespDto> dtos, int hallId) {
        this.fm = fm;
        this.dtos = dtos;
        this.hallId = hallId;
    }

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
            if(dto.getHallId().intValue() == hallId) {
                if(ticketingTheaterSeats.isEmpty()) {
                    ticketingTheaterSeats.add(new TicketingTheaterSeatDto(dto.getStartTime(), dto.getRunningTime().intValue(), dto.getSeatCount()));
                } else {
                    boolean isSame = true;
                    for (TicketingTheaterSeatDto seatDto : ticketingTheaterSeats) {
                        if(dto.getStartTime().equals(seatDto.getStartTime())) {
                            isSame = true;
                            break;
                        } else {
                            isSame = false;
                        }
                    }

                    if(!isSame) {
                        ticketingTheaterSeats.add(new TicketingTheaterSeatDto(dto.getStartTime(), dto.getRunningTime().intValue(), dto.getSeatCount()));
                    }
                }
            }
        }

        return ticketingTheaterSeats.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        private final TicketingBottomDialogFragment mTicketingBottomDialogFragment;

        private TextView mTvStartTime, mTvEndTime, mTvExtraSeats, mTvTotalSeats;

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
        }

        private void onClick(View view) {
            mTicketingBottomDialogFragment.show(fm, "bottomSheet");

        }
        private String endTime(TicketingTheaterSeatDto dto) {
            String startTime = dto.getStartTime();
            String[] startTimeSplit = startTime.split(":");
            int startHour = Integer.parseInt(startTimeSplit[0]);
            int startMinute = Integer.parseInt(startTimeSplit[1]);
            int runningTime = dto.getRunningTime();

            int endTimeToMinute = ((startHour*60) + (startMinute) + (runningTime));
            int endTimeHour = (endTimeToMinute/60);
            int endTimeMinute = (endTimeToMinute%60);
            String endTime = "~"+endTimeHour+":"+endTimeMinute;

            return endTime;
        }

    }
}
