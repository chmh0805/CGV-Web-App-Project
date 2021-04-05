package com.example.cgvapplication.adapter;

import android.annotation.SuppressLint;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.activity.MovieListActivity;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class MovieListAdapter extends RecyclerView.Adapter<MovieListAdapter.MyViewHolder>{

    private static final String TAG = "MovieListAdapter";
    private final MovieListActivity movieListActivity;
    private List<MovieBoxOfficeRespDto> boxOfficeRespDtos = new ArrayList<>();

    public MovieListAdapter(MovieListActivity movieListActivity) {
        this.movieListActivity = movieListActivity;
    }

    public void setBoxOfficeRespDtos(List<MovieBoxOfficeRespDto> boxOfficeRespDtos) {
        this.boxOfficeRespDtos = boxOfficeRespDtos;
        notifyDataSetChanged();
    }
    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_list_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(boxOfficeRespDtos.get(position));
        holder.itemView.setOnClickListener(view -> {
            Intent intent = new Intent(movieListActivity, MovieDetailActivity.class);
            intent.putExtra("docId",boxOfficeRespDtos.get(position).getDocId());
            intent.putExtra("title", boxOfficeRespDtos.get(position).getTitle());
            movieListActivity.startActivity(intent);
            Log.d(TAG, "onBindViewHolder: 클릭 됨."+position);

        });
    }

    @Override
    public int getItemCount() {
        return boxOfficeRespDtos.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private ImageView ivPoster, ivAge;
        private TextView tvTitle, tvReleaseDate;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivPoster = itemView.findViewById(R.id.iv_poster);
            ivAge = itemView.findViewById(R.id.iv_age);
            tvTitle = itemView.findViewById(R.id.tv_title);
            tvReleaseDate = itemView.findViewById(R.id.tv_release_date);
        }

        public void setItem(MovieBoxOfficeRespDto movieBoxOfficeRespDto){

            Glide
                    .with(itemView)
                    .load(movieBoxOfficeRespDto.getPosterImageSrc())
                    .centerCrop()
                    .into(ivPoster);
            tvTitle.setText(movieBoxOfficeRespDto.getTitle().replaceAll("\\p{Z}",""));
            @SuppressLint("SimpleDateFormat") SimpleDateFormat preSimpleDateFormat = new SimpleDateFormat("yyyyMMdd");
            Date releaseDate = null;
            try {
                releaseDate = preSimpleDateFormat.parse(movieBoxOfficeRespDto.getReleaseDate());
            } catch (ParseException e) {
                e.printStackTrace();
            }
            @SuppressLint("SimpleDateFormat") SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy.MM.dd");
            tvReleaseDate.setText(simpleDateFormat.format(releaseDate));


            if(movieBoxOfficeRespDto.getAge().equals("12세관람가")){
                ivAge.setImageResource(R.drawable.age_12);
            } else if(movieBoxOfficeRespDto.getAge().equals("15세관람가")) {
                ivAge.setImageResource(R.drawable.age_15);
            } else if(movieBoxOfficeRespDto.getAge().equals("미성년자관람불가")) {
                ivAge.setImageResource(R.drawable.age_19);
            } else if(movieBoxOfficeRespDto.getAge().equals("연소자관람가")) {
                ivAge.setImageResource(R.drawable.age_all);
            }
        }
    }
}
