
package com.example.cgvapplication.adapter.ticketing.movie;


import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Build;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.fragment.FragTicketingTheater;

import java.time.LocalDate;
import java.time.format.TextStyle;
import java.util.List;
import java.util.Locale;

class TicketingCalendarListAdapter extends RecyclerView.Adapter<TicketingCalendarListAdapter.MyViewHolder> {

    private static final String TAG = "TicketingCalendarListAd";

    private final List<LocalDate> mLocalDates;

    TicketingCalendarListAdapter(List<LocalDate> mLocalDates) {
        this.mLocalDates = mLocalDates;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.calendar_item, parent, false);
        return new MyViewHolder(view);
    }

    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(mLocalDates.get(position));
    }

    @Override
    public int getItemCount() {
        return mLocalDates.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private final TextView tvDaysNum;
        private final TextView tvDays;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            tvDaysNum = itemView.findViewById(R.id.tv_day_num);
            tvDays = itemView.findViewById(R.id.tv_day);
        }

        @RequiresApi(api = Build.VERSION_CODES.O)
        @SuppressLint("SetTextI18n")
        public void setItem(LocalDate localDate) {
            String localDateDay = localDate.getDayOfWeek().getDisplayName(TextStyle.SHORT, Locale.KOREAN);
            if (localDateDay.equals("???")) {
                tvDays.setTextColor(Color.parseColor("#3333FF"));
            } else if (localDateDay.equals("???")) {
                tvDays.setTextColor(Color.parseColor("#FF3636"));
            }
            tvDays.setText(localDateDay);

            tvDaysNum.setText(localDate.getDayOfMonth() + "");
        }

    }

}
