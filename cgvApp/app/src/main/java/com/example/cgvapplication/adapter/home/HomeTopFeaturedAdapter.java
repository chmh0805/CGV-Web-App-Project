package com.example.cgvapplication.adapter.home;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.service.dto.movie.AppMovieHomeRespDto;

import java.util.List;

public class HomeTopFeaturedAdapter extends RecyclerView.Adapter<HomeTopFeaturedAdapter.MyViewHolder> {

    private static final String TAG = "HomeTopBlurbAdapter";
    private final Context mContext;
    private final List<AppMovieHomeRespDto> movies;

    public HomeTopFeaturedAdapter(Context mContext, List<AppMovieHomeRespDto> movies) {
        this.mContext = mContext;
        this.movies = movies;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_top_featuredmovie_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(movies.get(position));
        holder.btnHomeTopFeaturedMovie.setOnClickListener(view -> {
            Intent intent = new Intent(mContext, MovieDetailActivity.class);
            mContext.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return movies.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvMovieTitle;
        private ImageView ivHomeTopFeaturedMoviePoster;
        private AppCompatButton btnHomeTopFeaturedMovie;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvMovieTitle = itemView.findViewById(R.id.tv_home_top_featuredMovie_title);
            ivHomeTopFeaturedMoviePoster = itemView.findViewById(R.id.iv_home_top_featuredMovie_poster);
            btnHomeTopFeaturedMovie = itemView.findViewById(R.id.btn_home_top_featuredMovie_btn);
        }

        public void setItem(AppMovieHomeRespDto dto) {
            Glide.with(mContext).load(dto.getImageUrl()).into(ivHomeTopFeaturedMoviePoster);
            mTvMovieTitle.setText(dto.getTitle());
        }
    }
}
