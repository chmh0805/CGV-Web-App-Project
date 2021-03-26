package com.example.cgvapplication.adapter.movielog;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class MovieLogExpectAdapter extends RecyclerView.Adapter<MovieLogExpectAdapter.MyViewHolder> {

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.expect_movie_item, parent, false);

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

        private ImageView ivExpectMoviePoster;
        private TextView tvExpectMovieTitle;
        private AppCompatButton btnExpectMovieTicketing, btnExpectMovieRemove;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            ivExpectMoviePoster = itemView.findViewById(R.id.iv_expect_movie_poster);
            tvExpectMovieTitle = itemView.findViewById(R.id.tv_expect_movie_title);
            btnExpectMovieRemove = itemView.findViewById(R.id.btn_expect_movie_remove);
            btnExpectMovieTicketing = itemView.findViewById(R.id.btn_expect_movie_ticketing);
        }

        public void setItem() {

        }
    }
}
