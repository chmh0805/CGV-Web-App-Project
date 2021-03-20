package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.Review;

import java.util.List;

public class MovieReviewAdapter extends RecyclerView.Adapter<MovieReviewAdapter.MyViewHolder> {

    private final List<Review> reviews;

    public MovieReviewAdapter(List<Review> reviews) {
        this.reviews = reviews;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_review_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(reviews.get(position));
    }

    @Override
    public int getItemCount() {
        return reviews.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvTitle, mTvContent;
        private ImageView mIvLike;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvTitle = itemView.findViewById(R.id.tv_title);
            mTvContent = itemView.findViewById(R.id.tv_content);
            mIvLike = itemView.findViewById(R.id.iv_like);
        }

        public void setItem(Review review) {
            mTvTitle.setText(review.getTitle());
            mTvContent.setText(review.getContent());

            if(review.isLike()) {
                mIvLike.setImageResource(R.drawable.ic_stategood);
            } else {
                mIvLike.setImageResource(R.drawable.ic_statebad);
            }
        }
    }
}
