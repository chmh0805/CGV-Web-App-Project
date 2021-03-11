package com.example.cgvapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.MovieTicketListAdapter;
import com.example.cgvapplication.model.giftshop.MovieTicket;

import java.util.ArrayList;
import java.util.List;


public class FragGiftShopTicket extends Fragment {
    private RecyclerView mRvMovieTicketItem;
    private MovieTicketListAdapter mMovieTicketListAdapter;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_giftshop_ticket, container, false);
        mRvMovieTicketItem = view.findViewById(R.id.rv_movie_ticket_item);
        List<MovieTicket> movieTickets = new ArrayList<>();
        movieTickets.add(new MovieTicket(1, "CGV 영화관람권", "11,000원",R.drawable.cgv_movie_ticket));
        movieTickets.add(new MovieTicket(2, "CGV 영화관람권", "11,000원",R.drawable.cgv_movie_ticket));
        GridLayoutManager gridLayoutManager = new GridLayoutManager(view.getContext(), 2);
        mRvMovieTicketItem.setLayoutManager(gridLayoutManager);
        mMovieTicketListAdapter = new MovieTicketListAdapter(movieTickets, R.layout.giftshop_movie_ticket_grid_item);
        mRvMovieTicketItem.setAdapter(mMovieTicketListAdapter);

        return view;
    }
}
