package com.example.cgvapplication.adapter.ticketing.movie;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class TicketingMovieAdapter extends RecyclerView.Adapter<TicketingMovieAdapter.MyViewHolder> {

    private final FragmentManager fm;

    public TicketingMovieAdapter(FragmentManager fm) {
        this.fm = fm;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_movie_item, parent, false);
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
//            TicketingHallListAdapter mTicketingHallListAdapter = new TicketingHallListAdapter(fm, timeTables);
//            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.VERTICAL, false);
//            mRvHall.setLayoutManager(manager);
//            mRvHall.setAdapter(mTicketingHallListAdapter);
        }


    }
}
