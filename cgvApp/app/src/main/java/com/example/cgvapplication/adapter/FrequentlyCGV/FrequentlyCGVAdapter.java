package com.example.cgvapplication.adapter.FrequentlyCGV;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

import java.util.List;

public class FrequentlyCGVAdapter extends RecyclerView.Adapter<FrequentlyCGVAdapter.MyViewHolder> {

    private final List<String> locations;

    public FrequentlyCGVAdapter(List<String> locations) {
        this.locations = locations;
    }

    public void addItem(String location) {
        this.locations.add(location);
        notifyDataSetChanged();
    }

    public void removeItem(String location) {
        this.locations.remove(location);
        notifyDataSetChanged();
    }

    public List<String> findAll() {
        return this.locations;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_cgv_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(locations.get(position));
        holder.btnFrequentlyCGVRemove.setOnClickListener(v -> {
            removeItem(locations.get(position));
        });
    }

    @Override
    public int getItemCount() {
        return locations.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvFrequentlyCGVTitle;
        private ImageButton btnFrequentlyCGVRemove;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFrequentlyCGVTitle = itemView.findViewById(R.id.tv_frequently_cgv_title);
            btnFrequentlyCGVRemove = itemView.findViewById(R.id.btn_frequently_cgv_remove);
        }

        private void setItem(String location) {
            tvFrequentlyCGVTitle.setText(location);
        }
    }
}
