package com.example.cgvapplication.adapter.servicecenter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class ServiceCenterNoticeAdapter extends RecyclerView.Adapter<ServiceCenterNoticeAdapter.MyViewHolder> {

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.notice_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 4;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private LinearLayout noticeContainer;
        private TextView noticeTitle, noticeCreateDate;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            noticeContainer = itemView.findViewById(R.id.notice_container);
            noticeTitle = itemView.findViewById(R.id.notice_title);
            noticeCreateDate = itemView.findViewById(R.id.notice_create_date);
        }

        public void setItem() {

        }
    }
}
