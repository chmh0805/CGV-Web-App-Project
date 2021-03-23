package com.example.cgvapplication.adapter;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class TicketingHallListAdapter extends RecyclerView.Adapter<TicketingHallListAdapter.MyViewHolder> {

    private final FragmentManager fm;

    public TicketingHallListAdapter(FragmentManager fm) {
        this.fm = fm;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_hall_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
    }

    @Override
    public int getItemCount() {
        return 2;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            RecyclerView mRvSeat = itemView.findViewById(R.id.rv_seat);
            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.HORIZONTAL, false);
            TicketingSeatAdapter mTicketingSeatAdapter = new TicketingSeatAdapter(fm);
            mRvSeat.setLayoutManager(manager);
            mRvSeat.setAdapter(mTicketingSeatAdapter);

        }

    }
}
