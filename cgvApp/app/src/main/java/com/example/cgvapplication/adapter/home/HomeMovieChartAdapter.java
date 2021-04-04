package com.example.cgvapplication.adapter.home;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
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
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.signature.ObjectKey;
import com.example.cgvapplication.activity.MovieDetailActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.makeramen.roundedimageview.RoundedImageView;

import java.io.BufferedInputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;

public class HomeMovieChartAdapter extends RecyclerView.Adapter<HomeMovieChartAdapter.MyViewHolder> {

    private static final String TAG = "HomeMovieListAdapter";
    private final Context mContext;
    private List<MovieBoxOfficeRespDto> movies;

    public HomeMovieChartAdapter(Context mContext, List<MovieBoxOfficeRespDto> movies) {
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
        holder.setItem(movies.get(position));
        holder.mIvHomeMovieListPoster.setOnClickListener(view -> {
            Intent intent = new Intent(mContext, MovieDetailActivity.class);
            mContext.startActivity(intent);
        });
    }

    @Override
    public int getItemCount() {
        return movies.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private RoundedImageView mIvHomeMovieListPoster;
        private TextView mTvHomeMovieListTitle, mTvHomeMovieListEggrate, mTvHomeMovieListPurchaserate;
        private AppCompatButton mBtnHomeMovielistPurchase;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvHomeMovieListPoster = itemView.findViewById(R.id.iv_home_movielist_Poster);
            mTvHomeMovieListTitle = itemView.findViewById(R.id.tv_home_movielist_title);
            mTvHomeMovieListEggrate = itemView.findViewById(R.id.tv_home_movielist_eggrate);
            mTvHomeMovieListPurchaserate = itemView.findViewById(R.id.tv_home_movielist_purchaserate);
            mBtnHomeMovielistPurchase = itemView.findViewById(R.id.btn_home_movielist_purchase);
        }

        public void setItem(MovieBoxOfficeRespDto dto) {
            Glide.with(mContext)
                    .load(dto.getPosterImageSrc())
                    .apply(new RequestOptions()
                            .signature(new ObjectKey("signature string"))
                            .skipMemoryCache(true)
                            .diskCacheStrategy(DiskCacheStrategy.NONE)
                    )
                    .into(mIvHomeMovieListPoster);
            mIvHomeMovieListPoster.setImageURI(Uri.parse(dto.getPosterImageSrc()));
            mTvHomeMovieListTitle.setText(dto.getTitle());
        }
    }
}
