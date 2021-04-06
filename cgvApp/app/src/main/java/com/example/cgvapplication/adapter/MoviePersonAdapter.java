package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.director.Director;

import java.util.List;

import de.hdodenhof.circleimageview.CircleImageView;

public class MoviePersonAdapter extends RecyclerView.Adapter<MoviePersonAdapter.MyViewHolder> {

    private final List<Director> directors;
    private final List<String> moviePeople;

    public MoviePersonAdapter(List<Director> directors, List<String> moviePeople) {
        this.directors = directors;
        this.moviePeople = moviePeople;
    }


    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.movie_person_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setDirectorItem(moviePeople.get(position));
        if(directors.size()<=position) {
            holder.itemView.findViewById(R.id.tv_director).setVisibility(View.GONE);

        } else {
            holder.itemView.findViewById(R.id.tv_director).setVisibility(View.VISIBLE);
        }

    }

    @Override
    public int getItemCount() {
        return (moviePeople.size());
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvMoviePerson;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvMoviePerson = itemView.findViewById(R.id.tv_movie_person);
        }

        public void setDirectorItem(String moviePeople) {
            mTvMoviePerson.setText(moviePeople);
        }
    }
}
