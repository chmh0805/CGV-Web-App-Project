package com.example.cgvapplication.adapter;

import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.review.Review;
import com.example.cgvapplication.service.dto.review.ReviewFindRespDto;

import java.util.ArrayList;
import java.util.List;

public class MovieReviewAdapter extends RecyclerView.Adapter<MovieReviewAdapter.MyViewHolder> {

    private static final String TAG = "MovieReviewAdapter";
    private List<ReviewFindRespDto> reviewFindRespDtos;
    private List<Review> reviews = new ArrayList<>();

    public MovieReviewAdapter(List<ReviewFindRespDto> reviewFindRespDtos) {
        this.reviewFindRespDtos = reviewFindRespDtos;
        notifyDataSetChanged();
    }

    public void addItem(Review review) {
        reviews.add(review);
        notifyDataSetChanged();
    }
    public MovieReviewAdapter() {

    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_review_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(reviewFindRespDtos.get(position));
    }

    @Override
    public int getItemCount() {
        return reviewFindRespDtos.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvTitle, mTvContent, mTvUsername, mTvCrerateTime;
        private ImageView mIvLike;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvTitle = itemView.findViewById(R.id.tv_title);
            mTvContent = itemView.findViewById(R.id.tv_content);
            mIvLike = itemView.findViewById(R.id.iv_like);
            mTvUsername = itemView.findViewById(R.id.tv_username);
            mTvCrerateTime = itemView.findViewById(R.id.tv_create_time);

        }

        public void setItem(ReviewFindRespDto reviewFindRespDtos) {
            Log.d(TAG, "setItem: getIsLike"+reviewFindRespDtos.getIsLike());
            mTvUsername.setText(reviewFindRespDtos.getUser().getUsername());
            mTvCrerateTime.setText(reviewFindRespDtos.getCreateDate());
            if(reviewFindRespDtos.getIsLike() == 0) {
                mTvTitle.setText("별루에요");
                mIvLike.setImageResource(R.drawable.ic_statebad);
            } else {
                mTvTitle.setText("좋았어요!");
                mIvLike.setImageResource(R.drawable.ic_stategood);
            }

            mTvContent.setText(reviewFindRespDtos.getContent());

        }
    }
}
