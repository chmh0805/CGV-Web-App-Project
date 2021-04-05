package com.example.cgvapplication.adapter.ticketing.theater;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.RadioButton;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.fragment.FragTicketingTheater;

import java.util.ArrayList;
import java.util.List;

public class TicketingTheaterChoiceAdapter extends RecyclerView.Adapter<TicketingTheaterChoiceAdapter.MyViewHolder> {

    private int lastSelectedPosition = 0;

    private final FragTicketingTheater mFragTicketingTheater;

    private List<String> locations = new ArrayList<>();

    public TicketingTheaterChoiceAdapter(FragTicketingTheater mFragTicketingTheater) {
        this.mFragTicketingTheater = mFragTicketingTheater;
    }

    public void addItem(String location) {
        this.locations.add(location);
        notifyDataSetChanged();
    }

    public List<String> findAll() {
        return this.locations;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.theater_check_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(locations.get(position));
        holder.mRbTheater.setChecked(lastSelectedPosition == position);
        if (holder.mRbTheater.isChecked()) {
            holder.mRbTheater.setTextColor(Color.WHITE);
            mFragTicketingTheater.downloadTimeTable(holder.mRbTheater.getText().toString());
        } else {
            holder.mRbTheater.setTextColor(Color.BLACK);
        }
    }


    @Override
    public int getItemCount() {
        return locations.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        public RadioButton mRbTheater;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mRbTheater = (RadioButton) itemView.findViewById(R.id.rb_theater);
            mRbTheater.setOnClickListener( this::onClick );
        }

        public void setItem(String location) {
            mRbTheater.setText(location);
        }

        private void onClick(View view) {
            lastSelectedPosition = getAdapterPosition();
            notifyDataSetChanged();
        }
    }
}
