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

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.model.movie.Movie;

import java.util.List;

public class HomeWillScreeningAdapter extends RecyclerView.Adapter<HomeWillScreeningAdapter.MyViewHolder> {

    private static final String TAG = "HomeMovieListAdapter";
    private final Context mContext;
    private List<Movie> movies;

    public HomeWillScreeningAdapter(Context mContext, List<Movie> movies) {
        this.mContext = mContext;
        this.movies = movies;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.home_movielist_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 10;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView ivHomeMovieListPoster;
        private TextView tvHomeMovieListEggrate, tvHomeMovieListPurchaserate;
        private AppCompatButton btnHomeMovielistPurchase;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivHomeMovieListPoster = itemView.findViewById(R.id.iv_home_movielist_Poster);
            tvHomeMovieListEggrate = itemView.findViewById(R.id.tv_home_movielist_eggrate);
            tvHomeMovieListPurchaserate = itemView.findViewById(R.id.tv_home_movielist_purchaserate);
            btnHomeMovielistPurchase = itemView.findViewById(R.id.btn_home_movielist_purchase);

            itemView.setOnClickListener(view -> {
                Intent intent = new Intent(mContext, MovieDetailActivity.class);
                mContext.startActivity(intent);
            });
        }
    }
}
