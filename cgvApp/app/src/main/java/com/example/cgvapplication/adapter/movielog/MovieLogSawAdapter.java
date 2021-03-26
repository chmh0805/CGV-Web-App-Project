package com.example.cgvapplication.adapter.movielog;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class MovieLogSawAdapter extends RecyclerView.Adapter<MovieLogSawAdapter.MyViewHolder> {

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.saw_movie_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 3;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private ConstraintLayout clSawMovieContainer;
        private ImageView ivSawMoviePoster;
        private TextView tvSawMovieTitle, tvSawMovieLookingday, tvSawMovieTheater, tvSawMovieHall, tvSawMovieSeat;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            clSawMovieContainer = itemView.findViewById(R.id.cl_saw_movie_container);
            ivSawMoviePoster = itemView.findViewById(R.id.iv_saw_movie_poster);
            tvSawMovieTitle = itemView.findViewById(R.id.tv_saw_movie_title);
            tvSawMovieLookingday = itemView.findViewById(R.id.tv_saw_movie_lookingday);
            tvSawMovieTheater = itemView.findViewById(R.id.tv_saw_movie_theater);
            tvSawMovieHall = itemView.findViewById(R.id.tv_saw_movie_hall);
            tvSawMovieSeat = itemView.findViewById(R.id.tv_saw_movie_seat);
        }

        public void setItem() {

        }
    }
}
