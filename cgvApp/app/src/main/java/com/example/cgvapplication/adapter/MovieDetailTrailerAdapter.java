package com.example.cgvapplication.adapter;

import android.content.Intent;
import android.net.Uri;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.model.trailer.Trailer;

import java.util.List;

public class MovieDetailTrailerAdapter extends RecyclerView.Adapter<MovieDetailTrailerAdapter.MyViewHolder> {
    private final List<Trailer> trailers;
    private final MovieDetailActivity movieDetailActivity;

    public MovieDetailTrailerAdapter(List<Trailer> trailers, MovieDetailActivity movieDetailActivity) {
        this.trailers = trailers;
        this.movieDetailActivity = movieDetailActivity;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_detail_trailer_item, parent, false);
        return new MovieDetailTrailerAdapter.MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(trailers.get(position));
        String url =  trailers.get(position).getTrailerUrl();
        holder.itemView.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            movieDetailActivity.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return trailers.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder{
        private ImageView mIvTrailer;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvTrailer = itemView.findViewById(R.id.iv_trailer);
        }

        public void setItem(Trailer trailer) {
            Glide
                    .with(itemView)
                    .load(trailer.getThumbImageUrl())
                    .centerCrop()
                    .into(mIvTrailer);
        }
    }
}
