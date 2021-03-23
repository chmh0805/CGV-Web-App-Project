package com.example.cgvapplication.adapter.findtheater;

import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

import java.util.List;

public class FindTheaterLocationAdapter extends RecyclerView.Adapter<FindTheaterLocationAdapter.MyViewHolder> {

    private final List<String> locations;

    public FindTheaterLocationAdapter(List<String> locations) {
        this.locations = locations;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.find_theater_location_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(locations.get(position));
    }

    @Override
    public int getItemCount() {
        return locations.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvFindMovieLocation;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFindMovieLocation = itemView.findViewById(R.id.tv_find_movie_location);
        }

        public void setItem(String location) {
            tvFindMovieLocation.setText(location);
        }
    }
}
