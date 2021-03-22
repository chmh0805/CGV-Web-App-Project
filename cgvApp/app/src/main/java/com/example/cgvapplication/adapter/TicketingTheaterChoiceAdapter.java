package com.example.cgvapplication.adapter;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RadioButton;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class TicketingTheaterChoiceAdapter extends RecyclerView.Adapter<TicketingTheaterChoiceAdapter.MyViewHolder> {

    private int lastSelectedPosition = 0;

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.theater_check_item, parent,false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.mRbTheater.setChecked(lastSelectedPosition == position);
        if(holder.mRbTheater.isChecked()) holder.mRbTheater.setTextColor(Color.WHITE);
        else holder.mRbTheater.setTextColor(Color.BLACK);
    }


    @Override
    public int getItemCount() {
        return 2;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        public RadioButton mRbTheater;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mRbTheater = (RadioButton) itemView.findViewById(R.id.rb_theater);
            mRbTheater.setOnClickListener(this::onClick);
        }

        private void onClick(View view) {
            lastSelectedPosition = getAdapterPosition();
            notifyDataSetChanged();
        }
    }
}
