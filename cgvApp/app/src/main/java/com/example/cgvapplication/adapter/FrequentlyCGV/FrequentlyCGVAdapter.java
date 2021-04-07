package com.example.cgvapplication.adapter.FrequentlyCGV;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.FrequentlyCgvActivity;
import com.example.cgvapplication.model.theater.Theater;

import java.util.List;

public class FrequentlyCGVAdapter extends RecyclerView.Adapter<FrequentlyCGVAdapter.MyViewHolder> {

    private final List<Theater> theaters;
    private final FrequentlyCgvActivity frequentlyCgvActivity;
    private final String token;

    public FrequentlyCGVAdapter(List<Theater> theaters, FrequentlyCgvActivity frequentlyCgvActivity, String token) {
        this.theaters = theaters;
        this.frequentlyCgvActivity = frequentlyCgvActivity;
        this.token = token;
    }

    public void addItem(Theater theater) {
        this.theaters.add(theater);
        notifyDataSetChanged();
    }

    public void addItems(List<Theater> theaters) {
        this.theaters.addAll(theaters);
        notifyDataSetChanged();
    }

    public void removeItem(Theater theater) {
        this.theaters.remove(theater);
        notifyDataSetChanged();
    }

    public List<Theater> findAll() {
        return this.theaters;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_cgv_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(theaters.get(position));
        holder.btnFrequentlyCGVRemove.setOnClickListener(v -> {
            frequentlyCgvActivity.deleteFreqCgv(theaters.get(position).getId(), token, position);
        });
    }

    @Override
    public int getItemCount() {
        return theaters.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private TextView tvFrequentlyCGVTitle;
        private ImageButton btnFrequentlyCGVRemove;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            tvFrequentlyCGVTitle = itemView.findViewById(R.id.tv_frequently_cgv_title);
            btnFrequentlyCGVRemove = itemView.findViewById(R.id.btn_frequently_cgv_remove);
        }

        private void setItem(Theater theater) {
            tvFrequentlyCGVTitle.setText(theater.getName().substring(theater.getName().indexOf("V")+1));
        }
    }
}
