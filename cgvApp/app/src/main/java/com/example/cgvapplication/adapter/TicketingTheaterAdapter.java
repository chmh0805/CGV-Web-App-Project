package com.example.cgvapplication.adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class TicketingTheaterAdapter extends RecyclerView.Adapter<TicketingTheaterAdapter.MyViewHolder> {

    private final FragmentManager fm;

    public TicketingTheaterAdapter(FragmentManager fm) {
        this.fm = fm;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_theater_item, parent, false);
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
            RecyclerView mRvHall = itemView.findViewById(R.id.rv_hall);
            TicketingHallListAdapter mTicketingHallListAdapter = new TicketingHallListAdapter(fm);
            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.VERTICAL, false);
            mRvHall.setLayoutManager(manager);
            mRvHall.setAdapter(mTicketingHallListAdapter);
        }


    }
}
