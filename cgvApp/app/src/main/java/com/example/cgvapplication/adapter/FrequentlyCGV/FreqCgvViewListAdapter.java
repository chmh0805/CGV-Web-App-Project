package com.example.cgvapplication.adapter.FrequentlyCGV;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

import java.util.List;

public class FreqCgvViewListAdapter extends RecyclerView.Adapter<FreqCgvViewListAdapter.MyViewHolder> {

    private static final String TAG = "FreqCgvViewListAdapter";

    private final List<String> mPoints;

    public FreqCgvViewListAdapter(List<String> mPoints) {
        this.mPoints = mPoints;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_cgv_list_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        String point = mPoints.get(position);
        holder.setItem(point);
    }

    @Override
    public int getItemCount() {
        return mPoints.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvFreqCgvPoint;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvFreqCgvPoint = itemView.findViewById(R.id.tv_frequently_cgv_point);
        }

        public void setItem(String point) {
            mTvFreqCgvPoint.setText(point);
        }
    }
}
