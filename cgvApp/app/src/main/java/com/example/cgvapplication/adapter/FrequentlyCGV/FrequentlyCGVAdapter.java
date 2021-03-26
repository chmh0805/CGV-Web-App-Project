package com.example.cgvapplication.adapter.FrequentlyCGV;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class FrequentlyCGVAdapter extends RecyclerView.Adapter<FrequentlyCGVAdapter.MyViewHolder> {

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_cgv_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 1;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvFrequentlyCGVTitle;
        private ImageButton btnFrequentlyCGVRemove;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFrequentlyCGVTitle = itemView.findViewById(R.id.tv_frequently_cgv_title);
            btnFrequentlyCGVRemove = itemView.findViewById(R.id.btn_frequently_cgv_remove);
        }
    }
}
