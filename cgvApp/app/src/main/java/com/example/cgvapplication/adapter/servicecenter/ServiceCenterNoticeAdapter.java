package com.example.cgvapplication.adapter.servicecenter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.notice.Notice;

import java.util.List;

public class ServiceCenterNoticeAdapter extends RecyclerView.Adapter<ServiceCenterNoticeAdapter.MyViewHolder> {

    private final List<Notice> notices;

    public ServiceCenterNoticeAdapter(List<Notice> notices) {
        this.notices = notices;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.notice_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(notices.get(position));
    }

    @Override
    public int getItemCount() {
        return notices.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private LinearLayout mNoticeContainer;
        private TextView mNoticeTitle, mNoticeCreateDate, mNoticeContent;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mNoticeContainer = itemView.findViewById(R.id.notice_container);
            mNoticeTitle = itemView.findViewById(R.id.notice_title);
            mNoticeCreateDate = itemView.findViewById(R.id.notice_create_date);
            mNoticeContent = itemView.findViewById(R.id.notice_container);
        }

        public void setItem(Notice notice) {
            mNoticeTitle.setText(notice.getTitle());
            mNoticeCreateDate.setText(notice.getCreateDate().toString());
            mNoticeContent.setText(notice.getContent());
        }
    }
}
