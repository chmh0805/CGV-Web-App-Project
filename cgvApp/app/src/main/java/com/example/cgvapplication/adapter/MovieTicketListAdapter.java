package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.giftshop.MovieTicket;

import java.util.List;

public class MovieTicketListAdapter extends RecyclerView.Adapter<MovieTicketListAdapter.MyViewHolder> {

    private final List<MovieTicket> mMovieTickets;

    private final int mLayoutRes;

    public MovieTicketListAdapter(List<MovieTicket> movieTickets, int LayoutRes) {
        this.mMovieTickets = movieTickets;
        this.mLayoutRes = LayoutRes;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(mLayoutRes, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(mMovieTickets.get(position));
    }

    @Override
    public int getItemCount() {
        return mMovieTickets.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView mIvMovieTicket;
        private TextView mTvMovieTicket, mTvMovieTicketPrice;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvMovieTicket = itemView.findViewById(R.id.iv_movie_ticket);
            mTvMovieTicket = itemView.findViewById(R.id.tv_movie_ticket);
            mTvMovieTicketPrice = itemView.findViewById(R.id.tv_movie_ticket_price);
        }

        public void setItem(MovieTicket movieTicket) {
            mTvMovieTicket.setText(movieTicket.getName());
            mIvMovieTicket.setImageResource(movieTicket.getImgSrc());
            mTvMovieTicketPrice.setText(movieTicket.getPrice());
        }
    }
}
