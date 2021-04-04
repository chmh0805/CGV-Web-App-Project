package com.example.cgvapplication.adapter.ticketing;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.Movie;
import com.makeramen.roundedimageview.RoundedImageView;

public class TicketingMoviePosterAdapter extends RecyclerView.Adapter<TicketingMoviePosterAdapter.MyViewHolder>{

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_poster_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 10;
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private RoundedImageView mIvPoster;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvPoster = itemView.findViewById(R.id.iv_poster);
        }

        public void setItem(Movie movie) {
            //mIvPoster.setImageResource(movie.getPosterImgSrc());
        }
    }

}
