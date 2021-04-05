package com.example.cgvapplication.adapter.FrequentlyCGV;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.appcompat.widget.AppCompatButton;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

import java.util.List;

public class FreqCgvViewBtnBoxAdapter extends RecyclerView.Adapter<FreqCgvViewBtnBoxAdapter.MyViewHolder> {

    private static final String TAG = "FreqCgvViewBtnBoxAdapte";

    private final List<String> mLocation;

    public FreqCgvViewBtnBoxAdapter(List<String> mLocation) {
        this.mLocation = mLocation;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_cgv_btn_box_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        String location = mLocation.get(position);
        holder.setItem(location);
        holder.itemView.setOnClickListener(v -> {

        });
    }

    @Override
    public int getItemCount() {
        return mLocation.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private AppCompatButton mBtnFrequentlyCgvList;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mBtnFrequentlyCgvList = itemView.findViewById(R.id.btn_frequently_cgv_list);
        }

        public void setItem(String location) {
            mBtnFrequentlyCgvList.setText(location);
        }
    }
}
