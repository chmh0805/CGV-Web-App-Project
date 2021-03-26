package com.example.cgvapplication.adapter.noticebox;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class NoticeBoxAdapter extends RecyclerView.Adapter<NoticeBoxAdapter.MyViewHolder> {

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {

        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.notice_box_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 1;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvNoticeBoxTitle, tvNoticeBoxCreateDate;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvNoticeBoxTitle = itemView.findViewById(R.id.tv_notice_box_title);
            tvNoticeBoxCreateDate = itemView.findViewById(R.id.tv_notice_box_create_date);
        }

        public void setItem() {

        }
    }
}
