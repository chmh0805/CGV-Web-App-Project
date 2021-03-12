package com.example.cgvapplication.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.giftshop.GiftCard;

import java.util.List;

public class GiftCardListAdapter extends RecyclerView.Adapter<GiftCardListAdapter.MyViewHolder> {

    private final List<GiftCard> mGiftCards;

    public GiftCardListAdapter(List<GiftCard> giftCards) {
        this.mGiftCards = giftCards;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.gfitshop_giftcard_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(mGiftCards.get(position));
    }

    @Override
    public int getItemCount() {
        return mGiftCards.size();
    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView mIvGiftCard;
        private TextView mTvGiftCard;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvGiftCard = itemView.findViewById(R.id.tv_gift_card);
            mIvGiftCard = itemView.findViewById(R.id.iv_gift_card);
        }
        public void setItem(GiftCard giftCard) {
            mTvGiftCard.setText(giftCard.getName());
            mIvGiftCard.setImageResource(giftCard.getImgSrc());
        }
    }
}
