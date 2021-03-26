package com.example.cgvapplication.adapter.home;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.featuredmovie.FeaturedMovie;

import java.util.List;

public class HomeFeaturedMovieAdapter extends RecyclerView.Adapter<HomeFeaturedMovieAdapter.MyViewHolder> {

    private static final String TAG = "HomeFeaturedMovieAdapte";

    private List<FeaturedMovie> featuredMovies;

    public HomeFeaturedMovieAdapter(List<FeaturedMovie> featuredMovies) {
        this.featuredMovies = featuredMovies;
    }


    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_featuredmovie_item, parent, false);

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

        private ImageView ivHomeFeaturedMoviePoster;
        private TextView tvHomeFeatureMovieContent, tvHomeFeatureMovieTitle;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            ivHomeFeaturedMoviePoster = itemView.findViewById(R.id.iv_home_featuredMovie_poster);
            tvHomeFeatureMovieContent = itemView.findViewById(R.id.tv_home_featureMovie_content);
            tvHomeFeatureMovieTitle = itemView.findViewById(R.id.tv_home_featureMovie_title);
        }
    }
}
