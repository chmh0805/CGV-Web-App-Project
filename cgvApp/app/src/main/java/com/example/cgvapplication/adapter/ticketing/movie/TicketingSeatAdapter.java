package com.example.cgvapplication.adapter.ticketing.movie;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.fragment.TicketingBottomDialogFragment;

public class TicketingSeatAdapter extends RecyclerView.Adapter<TicketingSeatAdapter.MyViewHolder> {

    private final FragmentManager fm;
    public TicketingSeatAdapter(FragmentManager fm) {
        this.fm = fm;
    }


    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_seat_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 10;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private final TicketingBottomDialogFragment mTicketingBottomDialogFragment;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTicketingBottomDialogFragment = new TicketingBottomDialogFragment();
            itemView.setOnClickListener(this::onClick);

        }

        private void onClick(View view) {
            mTicketingBottomDialogFragment.show(fm, "bottomSheet");

        }
    }
}
