package com.example.cgvapplication.adapter.ticketing.movie;

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
import com.example.cgvapplication.adapter.TicketingSeatAdapter;
import com.example.cgvapplication.service.dto.timetable.TimeTableHallRespDto;

import java.util.List;

public class TicketingHallListAdapter extends RecyclerView.Adapter<TicketingHallListAdapter.MyViewHolder> {

    private final FragmentManager fm;
    private static final String TAG = "TicketingHallListAdapte";
    private final List<TimeTableHallRespDto> timeTableHallRespDtos;
    private final String theater;
//    private final long theaterId;
//    private final String docId;

//    public TicketingHallListAdapter(FragmentManager fm, String theater, long theaterId, String docId) {
//        this.fm = fm;
//        this.theater = theater;
//        this.theaterId = theaterId;
//        this.docId = docId;
//    }
    public TicketingHallListAdapter(FragmentManager fm, String theater, List<TimeTableHallRespDto> timeTableHallRespDtos) {
        this.fm = fm;
        this.theater = theater;
        this.timeTableHallRespDtos = timeTableHallRespDtos;
       // Log.d(TAG, "TicketingHallListAdapter: "+this.timeTableHallRespDtos.size());

    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_hall_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(timeTableHallRespDtos.get(position));
    }

    @Override
    public int getItemCount() {
        Log.d(TAG, "getItemCount: 사이즈는 무야");
        return timeTableHallRespDtos.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private TextView mTvHall;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            RecyclerView mRvSeat = itemView.findViewById(R.id.rv_seat);
            mTvHall = itemView.findViewById(R.id.tv_hall);
            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.HORIZONTAL, false);
            TicketingSeatAdapter mTicketingSeatAdapter = new TicketingSeatAdapter(fm);
            mRvSeat.setLayoutManager(manager);
            mRvSeat.setAdapter(mTicketingSeatAdapter);
          //  hallList(docId, theaterId);

        }
        public void setItem(TimeTableHallRespDto timeTableHallRespDto) {
            mTvHall.setText(timeTableHallRespDto.getName());
        }

    }
}
