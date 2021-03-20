package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.MoviePerson;

import java.util.List;

import de.hdodenhof.circleimageview.CircleImageView;

public class MoviePersonAdapter extends RecyclerView.Adapter<MoviePersonAdapter.MyViewHolder> {

    private final List<MoviePerson> moviePeople;

    public MoviePersonAdapter(List<MoviePerson> moviePeople) {
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
        holder.setItem(moviePeople.get(position));
    }

    @Override
    public int getItemCount() {
        return moviePeople.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private CircleImageView mIvMoviePerson;
        private TextView mTvMoviePerson, mTvDirector;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvMoviePerson = itemView.findViewById(R.id.iv_movie_person);
            mTvMoviePerson = itemView.findViewById(R.id.tv_movie_person);
            mTvDirector = itemView.findViewById(R.id.tv_director);
        }

        public void setItem(MoviePerson moviePerson) {
            mTvMoviePerson.setText(moviePerson.getName());
            mIvMoviePerson.setImageResource(moviePerson.getImgSrc());
            if(moviePerson.isDirector()) {
                mTvDirector.setVisibility(View.VISIBLE);
            }
        }
    }
}
