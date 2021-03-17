package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.giftshop.Combo;

import java.util.List;

public class ComboListAdapter extends RecyclerView.Adapter<ComboListAdapter.MyViewHolder> {

    private final List<Combo> mCombos;

    public ComboListAdapter(List<Combo> combos) {
        this.mCombos = combos;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.giftshop_combo_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(mCombos.get(position));
    }

    @Override
    public int getItemCount() {
        return mCombos.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView mIvCombo;
        private TextView mTvComboName, mTvComboContent, mTvComboPrice;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvCombo = itemView.findViewById(R.id.iv_combo);
            mTvComboName = itemView.findViewById(R.id.tv_combo_name);
            mTvComboContent = itemView.findViewById(R.id.tv_combo_content);
            mTvComboPrice = itemView.findViewById(R.id.tv_combo_price);
        }
        public void setItem(Combo combo) {
            mIvCombo.setImageResource(combo.getImgSrc());
            mTvComboName.setText(combo.getName());
            mTvComboContent.setText(combo.getContent());
            mTvComboPrice.setText(combo.getPrice());
        }
    }
}
