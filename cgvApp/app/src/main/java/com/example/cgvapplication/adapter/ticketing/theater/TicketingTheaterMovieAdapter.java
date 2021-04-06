package com.example.cgvapplication.adapter.ticketing.theater;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.load.engine.DiskCacheStrategy;
import com.bumptech.glide.request.RequestOptions;
import com.bumptech.glide.signature.ObjectKey;
import com.example.cgvapplication.R;
import com.example.cgvapplication.fragment.FragTicketingTheater;
import com.example.cgvapplication.service.dto.timetable.TicketingTheaterMovieDto;
import com.example.cgvapplication.service.dto.timetable.TimeTableTheaterRespDto;
import com.makeramen.roundedimageview.RoundedImageView;

import java.util.ArrayList;
import java.util.List;

public class TicketingTheaterMovieAdapter extends RecyclerView.Adapter<TicketingTheaterMovieAdapter.MyViewHolder> {

    private static final String TAG = "TicketingMovieAdapter2";

    private final FragmentManager fm;
    private final FragTicketingTheater fragTicketingTheater;
    private final List<TimeTableTheaterRespDto> dtos;

    public TicketingTheaterMovieAdapter(FragmentManager fm, FragTicketingTheater fragTicketingTheater, List<TimeTableTheaterRespDto> dtos) {
        this.fm = fm;
        this.fragTicketingTheater = fragTicketingTheater;
        this.dtos = dtos;
    }

    List<TicketingTheaterMovieDto> ticketingTheaterMovieDtos = new ArrayList<>();

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_movie_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(ticketingTheaterMovieDtos.get(position));
    }

    @Override
    public int getItemCount() {

        for (TimeTableTheaterRespDto dto : dtos) {
            if (ticketingTheaterMovieDtos.isEmpty()) {
                ticketingTheaterMovieDtos.add(new TicketingTheaterMovieDto(dto.getTitle(), dto.getPosterImgSrc(), dto.getAge()));
            } else {
                boolean isSame = true;
                for (TicketingTheaterMovieDto dto1 : ticketingTheaterMovieDtos) {
                    if(dto.getTitle().equals(dto1.getTitle())) {
                        isSame = true;
                        break;
                    } else {
                        isSame = false;
                    }
                }
                if(!isSame) {
                    ticketingTheaterMovieDtos.add(new TicketingTheaterMovieDto(dto.getTitle(), dto.getPosterImgSrc(), dto.getAge()));
                }
            }
        }

        return ticketingTheaterMovieDtos.size();
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {

        private RoundedImageView mIvPoster;
        private TextView mTvTitle;
        private ImageView mIvAge;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvPoster = itemView.findViewById(R.id.iv_poster);
            mTvTitle = itemView.findViewById(R.id.tv_title);
            mIvAge = itemView.findViewById(R.id.iv_age);
        }

        public void setItem(TicketingTheaterMovieDto dto) {
            Glide.with(fragTicketingTheater.getContext())
                    .load(dto.getPosterImgSrc())
                    .apply(new RequestOptions()
                            .signature(new ObjectKey("signature string"))
                            .skipMemoryCache(true)
                            .diskCacheStrategy(DiskCacheStrategy.NONE)
                    )
                    .into(mIvPoster);
            mTvTitle.setText(dto.getTitle());
            if (dto.getAge().equals("전체관람가")) {
                mIvAge.setImageResource(R.drawable.age_all);
            } else if (dto.getAge().equals("12세관람가")) {
                mIvAge.setImageResource(R.drawable.age_12);
            } else if (dto.getAge().equals("15세관람가")) {
                mIvAge.setImageResource(R.drawable.age_15);
            } else if (dto.getAge().equals("연소자관람가")) {
                mIvAge.setImageResource(R.drawable.age_19);
            }

            RecyclerView mRvHall = itemView.findViewById(R.id.rv_hall);
            TicketingTheaterHallListAdapter mTicketingTheaterHallListAdapter = new TicketingTheaterHallListAdapter(fm, dtos, dto.getTitle());
            LinearLayoutManager manager = new LinearLayoutManager(itemView.getContext(), RecyclerView.VERTICAL, false);
            mRvHall.setLayoutManager(manager);
            mRvHall.setAdapter(mTicketingTheaterHallListAdapter);
        }

    }
}
