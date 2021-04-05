package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.stillcut.StillCut;
import com.makeramen.roundedimageview.RoundedImageView;

import java.util.List;

public class MovieStillCutAdapter extends RecyclerView.Adapter<MovieStillCutAdapter.MyViewHolder> {

    private static final String TAG = "MovieStillCutAdapter";
    private final List<StillCut> mStillCuts;

    public MovieStillCutAdapter(List<StillCut> mStillCuts) {
        this.mStillCuts = mStillCuts;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_stillcut_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(mStillCuts.get(position));

    }

    @Override
    public int getItemCount() {
        return mStillCuts.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        private RoundedImageView mIvStillCut;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvStillCut = itemView.findViewById(R.id.iv_still_cut);
        }

        public void setItem(StillCut stillCut) {
            Glide
                    .with(itemView)
                    .load(stillCut.getImageUrl())
                    .centerCrop()
                    .into(mIvStillCut);
        }
    }
}
