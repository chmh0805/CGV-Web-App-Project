package com.example.cgvapplication.adapter.home;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
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
        holder.mBtnHomeFeaturedMovie.setOnClickListener(view -> {
            Intent intent = new Intent(mContext, MovieDetailActivity.class);
            intent.putExtra("docId", movies.get(position).getDocId());
            intent.putExtra("title", movies.get(position).getTitle());
            mContext.startActivity(intent);
        });

        String url =  movies.get(position).getTrailerUrl();
        holder.itemView.setOnClickListener(view -> {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            mContext.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return movies.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView ivHomeFeaturedMoviePoster;
        private TextView tvHomeFeatureMovieTitle;
        private AppCompatButton mBtnHomeFeaturedMovie;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivHomeFeaturedMoviePoster = itemView.findViewById(R.id.iv_home_featuredMovie_poster);
            tvHomeFeatureMovieTitle = itemView.findViewById(R.id.tv_home_featureMovie_title);
            mBtnHomeFeaturedMovie = itemView.findViewById(R.id.btn_home_featuredMovie);
        }

        public void setItem(AppMovieHomeRespDto dto) {
            Glide.with(mContext).load(dto.getThumbImageUrl()).into(ivHomeFeaturedMoviePoster);
            tvHomeFeatureMovieTitle.setText(dto.getTitle());
        }
    }
}
