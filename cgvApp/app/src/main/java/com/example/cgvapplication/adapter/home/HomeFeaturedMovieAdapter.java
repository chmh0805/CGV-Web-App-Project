package com.example.cgvapplication.adapter.home;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.service.dto.movie.AppMovieHomeRespDto;

import java.util.List;

public class HomeFeaturedMovieAdapter extends RecyclerView.Adapter<HomeFeaturedMovieAdapter.MyViewHolder> {

    private static final String TAG = "HomeFeaturedMovieAdapte";
    private final Context mContext;
    private final List<AppMovieHomeRespDto> movies;

    public HomeFeaturedMovieAdapter(Context mContext, List<AppMovieHomeRespDto> movies) {
        this.mContext = mContext;
        this.movies = movies;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_featuredmovie_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(movies.get(position));
    }

    @Override
    public int getItemCount() {
        return movies.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView ivHomeFeaturedMoviePoster;
        private TextView tvHomeFeatureMovieTitle;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivHomeFeaturedMoviePoster = itemView.findViewById(R.id.iv_home_featuredMovie_poster);
            tvHomeFeatureMovieTitle = itemView.findViewById(R.id.tv_home_featureMovie_title);
        }

        public void setItem(AppMovieHomeRespDto dto) {
            Glide.with(mContext).load(dto.getThumbImageUrl()).into(ivHomeFeaturedMoviePoster);
            tvHomeFeatureMovieTitle.setText(dto.getTitle());
        }
    }
}
