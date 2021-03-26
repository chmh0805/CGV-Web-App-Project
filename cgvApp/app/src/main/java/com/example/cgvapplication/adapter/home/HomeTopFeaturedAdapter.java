package com.example.cgvapplication.adapter.home;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.featuredmovie.TopFeaturedMovie;

import java.util.List;

public class HomeTopFeaturedAdapter extends RecyclerView.Adapter<HomeTopFeaturedAdapter.MyViewHolder> {

    private static final String TAG = "HomeTopBlurbAdapter";
    private final List<TopFeaturedMovie> topFeaturedMovies;

    public HomeTopFeaturedAdapter(List<TopFeaturedMovie> topFeaturedMovies) {
        this.topFeaturedMovies = topFeaturedMovies;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_top_featuredmovie_item, parent, false);

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

        private ImageView ivHomeTopFeaturedMoviePoster;
        private AppCompatButton btnHomeTopFeaturedMovieBtn;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivHomeTopFeaturedMoviePoster = itemView.findViewById(R.id.iv_home_top_featuredMovie_poster);
            btnHomeTopFeaturedMovieBtn = itemView.findViewById(R.id.btn_home_top_featuredMovie_btn);
        }
    }
}
