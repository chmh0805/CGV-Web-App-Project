package com.example.cgvapplication.adapter.movielog;

import android.content.Intent;
import android.util.Log;
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
import com.example.cgvapplication.activity.MovieLogActivity;
import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.service.ExpectMovieService;
import com.example.cgvapplication.service.dto.CMRespDto;
import com.example.cgvapplication.service.preference.SharedPreference;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MovieLogExpectAdapter extends RecyclerView.Adapter<MovieLogExpectAdapter.MyViewHolder> {

    private static final String TAG = "MovieLogExpectAdapter";
    private final List<ExpectMovie> expectMovies;
    private final MovieLogActivity movieLogActivity;

    public MovieLogExpectAdapter(List<ExpectMovie> expectMovies, MovieLogActivity movieLogActivity) {
        this.expectMovies = expectMovies;
        this.movieLogActivity = movieLogActivity;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.expect_movie_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(expectMovies.get(position), position);
        holder.itemView.setOnClickListener(view -> {
            Intent intent = new Intent(movieLogActivity, MovieDetailActivity.class);
            intent.putExtra("docId", expectMovies.get(position).getMovie().getDocId());
            movieLogActivity.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return expectMovies.size();
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

        public void setItem(ExpectMovie expectMovie, int position) {
            Glide
                    .with(itemView)
                    .load(expectMovie.getMovie().getPosterImgSrc())
                    .into(ivExpectMoviePoster);
            tvExpectMovieTitle.setText(expectMovie.getMovie().getTitle());
            btnExpectMovieRemove.setOnClickListener(view -> {
                ExpectMovieService expectMovieService = ExpectMovieService.retrofit.create(ExpectMovieService.class);
                Call<CMRespDto<Void>> call = expectMovieService.delete(SharedPreference.getAttribute(movieLogActivity, "Authorization"), expectMovie.getMovie().getDocId());
                call.enqueue(new Callback<CMRespDto<Void>>() {
                    @Override
                    public void onResponse(Call<CMRespDto<Void>> call, Response<CMRespDto<Void>> response) {
                        Log.d(TAG, "onResponse: 통신성공"+response.toString());
                        expectMovies.remove(position);
                        notifyDataSetChanged();
                    }

                    @Override
                    public void onFailure(Call<CMRespDto<Void>> call, Throwable t) {
                        Log.d(TAG, "onFailure: 통신실패");
                    }
                });
            });

        }
    }
}
