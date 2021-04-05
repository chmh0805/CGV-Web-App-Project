package com.example.cgvapplication.adapter.ticketing.movie;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.service.dto.timetable.TimeTableHallRespDto;

import java.util.List;

public class TicketingTheaterAdapter extends RecyclerView.Adapter<TicketingTheaterAdapter.MyViewHolder> {

    private final FragmentManager fm;
    private final String theater;

    private final List<TimeTableHallRespDto> timeTableHallRespDtoList;
   // private final List<TimeTable> timeTables;

    public TicketingTheaterAdapter(FragmentManager fm, String theater, List<TimeTableHallRespDto> timeTableHallRespDtoList) {
        this.fm = fm;
        this.theater = theater;
      //  this.timeTables = timeTables;
        this.timeTableHallRespDtoList = timeTableHallRespDtoList;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_theater_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(theater);
    }

    @Override
    public int getItemCount() {
        return 1;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private TextView tvTheater;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            RecyclerView mRvHall = itemView.findViewById(R.id.rv_hall);
            tvTheater = itemView.findViewById(R.id.tv_theater);
            TicketingHallListAdapter mTicketingHallListAdapter = new TicketingHallListAdapter(fm,  theater, timeTableHallRespDtoList);
            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.VERTICAL, false);
            mRvHall.setLayoutManager(manager);
            mRvHall.setAdapter(mTicketingHallListAdapter);
        }

        public void setItem(String theater) {
            tvTheater.setText(theater);
        }
    }
}
