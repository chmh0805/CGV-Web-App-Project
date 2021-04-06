package com.example.cgvapplication.fragment;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.adapter.MovieDetailTrailerAdapter;
import com.example.cgvapplication.adapter.MoviePersonAdapter;
import com.example.cgvapplication.adapter.MovieStillCutAdapter;
import com.example.cgvapplication.model.actor.Actor;
import com.example.cgvapplication.model.director.Director;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.model.stillcut.StillCut;
import com.example.cgvapplication.model.trailer.Trailer;
import com.example.cgvapplication.service.MovieService;
import com.example.cgvapplication.service.dto.CMRespDto;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class FragMovieDetailInfo extends Fragment {

    private static final String TAG = "FragMovieDetailInfo";
    private final FragMovieDetailInfo fragMovieDetailInfo = this;
    private final MovieDetailActivity movieDetailActivity;
    private RecyclerView mRvMoviePerson, mRvMovieStillCut, mRvMovieDetailTrailer;
    private MoviePersonAdapter mMoviePersonAdapter;
    private MovieStillCutAdapter mMovieStillCutAdapter;
    private MovieDetailTrailerAdapter mMovieDetailTrailerAdapter;
    private final String docId;
    private Handler mHandler;
    private TextView mTvTitle, mTvSubTitle, mTvReleaseDate, mTvAge, mTvRunningTime, mTvGenre, mTvSummary;
    private ImageView mIvPoster, mIvStill;
    private List<String> mMoviePeople;

    public FragMovieDetailInfo(MovieDetailActivity movieDetailActivity, String docId) {
        this.movieDetailActivity = movieDetailActivity;
        this.docId = docId;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_movie_detail_info, container, false);
        init(view);
        download(view);

        return view;
    }

    private void init(View view) {
        mRvMoviePerson = view.findViewById(R.id.rv_movie_person);
        mRvMovieStillCut = view.findViewById(R.id.rv_movie_still_cut);
        mRvMovieDetailTrailer = view.findViewById(R.id.rv_trailer);
        mTvTitle = view.findViewById(R.id.tv_title);
        mTvSubTitle = view.findViewById(R.id.tv_sub_title);
        mTvReleaseDate = view.findViewById(R.id.tv_release_date);
        mTvAge = view.findViewById(R.id.tv_age);
        mTvRunningTime = view.findViewById(R.id.tv_running_time);
        mTvGenre = view.findViewById(R.id.tv_genre);
        mIvPoster = view.findViewById(R.id.iv_poster);
        mIvStill = view.findViewById(R.id.iv_still_cut);
        mTvSummary =  view.findViewById(R.id.tv_summary);
        mHandler = new Handler();
        mMoviePeople = new ArrayList<>();

    }

    private void download(View view) {
        MovieService movieService = MovieService.retrofit.create(MovieService.class);

        Call<CMRespDto<Movie>> call = movieService.findById(docId);
        call.enqueue(new Callback<CMRespDto<Movie>>() {
            @SuppressLint("SetTextI18n")
            @Override
            public void onResponse(Call<CMRespDto<Movie>> call, Response<CMRespDto<Movie>> response) {
                Movie movie = response.body().getData();
                List<Director> directors = movie.getDirectors();
                List<Actor> actors = movie.getActors();
                List<StillCut> stillCuts = movie.getStillCuts();
                List<Trailer> trailers = movie.getTrailers();

                mTvTitle.setText(movie.getTitle());
                mTvSubTitle.setText(movie.getSubTitle());
                mTvAge.setText(movie.getAge());
                mTvGenre.setText(movie.getGenre());
                mTvRunningTime.setText(movie.getRunningTime()+"");
                mTvSummary.setText(movie.getSummary());

                for(int i=0; i<directors.size(); i++) {
                    mMoviePeople.add(directors.get(i).getName());
                }
                for (int i=0; i<actors.size(); i++) {
                    mMoviePeople.add(actors.get(i).getName());
                }
                @SuppressLint("SimpleDateFormat") SimpleDateFormat preSimpleDateFormat = new SimpleDateFormat("yyyyMMdd");
                Date releaseDate = null;
                try {
                    releaseDate = preSimpleDateFormat.parse(movie.getReleaseDate());
                } catch (ParseException e) {
                    e.printStackTrace();
                }
                @SuppressLint("SimpleDateFormat") SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy.MM.dd");
                mTvReleaseDate.setText(simpleDateFormat.format(releaseDate));
                Glide
                        .with(fragMovieDetailInfo)
                        .load(movie.getPosterImgSrc())
                        .centerCrop()
                        .into(mIvPoster);
                Glide
                        .with(fragMovieDetailInfo)
                        .load(movie.getStillCuts().get(0).getImageUrl())
                        .centerCrop()
                        .into(mIvStill);

                Log.d(TAG, "onResponse: 통신성공"+movie);
                Log.d(TAG, "onResponse: directorSize: "+ movie.getDirectors().size());
                LinearLayoutManager mLinearLayoutManager = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
                mRvMoviePerson.setLayoutManager(mLinearLayoutManager);
                mMoviePersonAdapter = new MoviePersonAdapter(directors, mMoviePeople);
                mRvMoviePerson.setAdapter(mMoviePersonAdapter);

                GridLayoutManager gridLayoutManager = new GridLayoutManager(view.getContext(), 2);
                mRvMovieStillCut.setLayoutManager(gridLayoutManager);
                mMovieStillCutAdapter = new MovieStillCutAdapter(stillCuts);
                mRvMovieStillCut.setAdapter(mMovieStillCutAdapter);

                LinearLayoutManager mLinerLayoutMangerTrailer = new LinearLayoutManager(view.getContext(), RecyclerView.HORIZONTAL, false);
                mRvMovieDetailTrailer.setLayoutManager(mLinerLayoutMangerTrailer);
                mMovieDetailTrailerAdapter = new MovieDetailTrailerAdapter(trailers, movieDetailActivity);
                mRvMovieDetailTrailer.setAdapter(mMovieDetailTrailerAdapter);
            }
            @Override
            public void onFailure(Call<CMRespDto<Movie>> call, Throwable t) {
                Log.d(TAG, "onFailure: 통신실패");
            }
        });
    }


}
