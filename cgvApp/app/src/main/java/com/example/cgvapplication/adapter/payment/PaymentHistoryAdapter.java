package com.example.cgvapplication.adapter.payment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.ticketing.Ticketing;

import java.util.List;

public class PaymentHistoryAdapter extends RecyclerView.Adapter<PaymentHistoryAdapter.MyViewHolder> {

    private final List<Ticketing> ticketings;

    public PaymentHistoryAdapter(List<Ticketing> ticketings) {
        this.ticketings = ticketings;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.payment_history_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(ticketings.get(position));
    }

    @Override
    public int getItemCount() {
        return ticketings.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView mTvPurchaseDate, mTvTitle, mTvPayment;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mTvPurchaseDate = itemView.findViewById(R.id.tv_purchase_date);
            mTvTitle = itemView.findViewById(R.id.tv_title);
            mTvPayment = itemView.findViewById(R.id.tv_payment);
        }

        private void setItem(Ticketing ticketing) {
            if ((ticketing.getPersonType() == 0) || (ticketing.getPersonType() == 2)) {
                mTvPayment.setText("7000원");
            } else {
                mTvPayment.setText("11000원");
            }
            mTvTitle.setText(ticketing.getTimeTable().getMovie().getTitle());

            String month = null;
            String day = null;
            if (0 < ticketing.getCreateDate().getMonth() && ticketing.getCreateDate().getMonth() < 10) {
                month = "0"+ticketing.getCreateDate().getMonth();
            }
            if (0 < ticketing.getCreateDate().getDay() && ticketing.getCreateDate().getDay() < 10) {
                day = "0"+ticketing.getCreateDate().getDay();
            }
            mTvPurchaseDate.setText(month+"-" +day );
        }
    }
}
