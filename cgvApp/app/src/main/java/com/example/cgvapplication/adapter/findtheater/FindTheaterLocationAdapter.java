 package com.example.cgvapplication.adapter.findtheater;

import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.activity.FindTheaterActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.FindTheaterPointActivity;
import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.service.dto.theater.TheaterAreaRespDto;

import java.util.List;

public class FindTheaterLocationAdapter extends RecyclerView.Adapter<FindTheaterLocationAdapter.MyViewHolder> {

    //private final List<String> locations;
    private static final String TAG = "FindTheaterLocationAdap";
    private final FindTheaterActivity findTheaterActivity;
    private List<TheaterAreaRespDto> theaterAreaRespDtos;
    public FindTheaterLocationAdapter(FindTheaterActivity findTheaterActivity) {
        //this.locations = locations;
        this.findTheaterActivity = findTheaterActivity;
    }

    public void setTheaterAreas(List<TheaterAreaRespDto> theaterAreaRespDtos) {
        this.theaterAreaRespDtos = theaterAreaRespDtos;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.find_theater_location_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        //String location = locations.get(position);
       // String location = theaterAreaRespDtos.get(position);
        holder.setItem(theaterAreaRespDtos.get(position));

        holder.itemView.setOnClickListener(v -> {
            Log.d(TAG, "onBindViewHolder: "+theaterAreaRespDtos.get(position).getArea());
            Intent intent = new Intent(findTheaterActivity, FindTheaterPointActivity.class);
            intent.putExtra("area", theaterAreaRespDtos.get(position).getArea());
            findTheaterActivity.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return theaterAreaRespDtos.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvFindMovieLocation;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFindMovieLocation = itemView.findViewById(R.id.tv_find_movie_location);
        }

        public void setItem(TheaterAreaRespDto theaterAreaRespDto) {
            tvFindMovieLocation.setText(theaterAreaRespDto.getArea());
        }
    }
}
