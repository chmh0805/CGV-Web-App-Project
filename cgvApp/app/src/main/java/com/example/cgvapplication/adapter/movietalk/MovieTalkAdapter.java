package com.example.cgvapplication.adapter.movietalk;

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
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movietalk.MovieTalk;

import java.util.List;

public class MovieTalkAdapter extends RecyclerView.Adapter<MovieTalkAdapter.MyViewHolder> {

    private static final String TAG = "HomeMovieListAdapter";

    private List<MovieTalk> movieTalks;

    public MovieTalkAdapter(List<MovieTalk> movieTalks) {
        this.movieTalks = movieTalks;
        notifyDataSetChanged();
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movietalk_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(movieTalks.get(position));

    }

    @Override
    public int getItemCount() {
        return movieTalks.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView ivMovieTalkMoviePoster, ivMovieTalkBlurbImg;
        private TextView tvMovieTalkTitle, tvMovieTalkContent;
        private AppCompatButton btnMovieTalkActionBtn;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            ivMovieTalkMoviePoster = itemView.findViewById(R.id.iv_movietalk_moviePoster);
            ivMovieTalkBlurbImg = itemView.findViewById(R.id.iv_movietalk_blurbImg);
            tvMovieTalkTitle = itemView.findViewById(R.id.tv_movietalk_title);
            tvMovieTalkContent = itemView.findViewById(R.id.tv_movietalk_content);
            btnMovieTalkActionBtn = itemView.findViewById(R.id.btn_movietalk_actionBtn);
        }

        public void setItem(MovieTalk movieTalk) {
            Log.d(TAG, "setItem: movieTalk: "+movieTalk.getImageSrc());
            Glide
                    .with(itemView)
                    .load(movieTalk.getMovie().getPosterImgSrc())
                    .into(ivMovieTalkMoviePoster);
            Glide
                    .with(itemView)
                    .load(movieTalk.getMovie().getPosterImgSrc())
                    .into(ivMovieTalkBlurbImg);
//            if(movieTalk.getImageSrc() != null)
//                ivMovieTalkBlurbImg.setImageURI(Uri.parse(movieTalk.getImageSrc()));
            tvMovieTalkTitle.setText(movieTalk.getMovie().getTitle());
            tvMovieTalkContent.setText(movieTalk.getContent());



        }
    }
}
