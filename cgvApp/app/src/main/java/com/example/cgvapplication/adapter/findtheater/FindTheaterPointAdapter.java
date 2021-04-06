package com.example.cgvapplication.adapter.findtheater;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.service.dto.theater.TheaterNameRespDto;

import java.util.List;

public class FindTheaterPointAdapter extends RecyclerView.Adapter<FindTheaterPointAdapter.MyViewHolder> {

    private static final String TAG = "FindTheaterPointAdapter";
    
    private List<TheaterNameRespDto> theaterNameRespDtos;


    public void setTheaterNameRespDtos(List<TheaterNameRespDto> theaterNameRespDtos) {
        this.theaterNameRespDtos = theaterNameRespDtos;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.find_theater_point_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        holder.setItem(theaterNameRespDtos.get(position).getName());
    }

    @Override
    public int getItemCount() {
        return theaterNameRespDtos.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvFindTheaterPoint;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvFindTheaterPoint = itemView.findViewById(R.id.tv_find_movie_point);
        }

        public void setItem(String point) {
            mTvFindTheaterPoint.setText(point);
        }
    }
}
