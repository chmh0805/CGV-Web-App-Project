package com.example.cgvapplication.adapter;

import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.GiftShopDetailActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.giftshop.GiftCard;

import java.util.List;

import static android.content.ContentValues.TAG;

public class GiftCardListAdapter extends RecyclerView.Adapter<GiftCardListAdapter.MyViewHolder> {

    private final List<GiftCard> mGiftCards;
    private final Context mContext;
    private final int mLayoutRes;

    public GiftCardListAdapter(List<GiftCard> giftCards, Context mContext, int layoutRes) {
        this.mGiftCards = giftCards;
        this.mContext = mContext;
        this.mLayoutRes = layoutRes;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(mLayoutRes, parent, false);
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

    public class MyViewHolder extends RecyclerView.ViewHolder {

        private ImageView mIvGiftCard;
        private TextView mTvGiftCard;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvGiftCard = itemView.findViewById(R.id.tv_gift_card);
            mIvGiftCard = itemView.findViewById(R.id.iv_gift_card);

            itemView.setOnClickListener(v -> {
                Intent intent = new Intent(mContext, GiftShopDetailActivity.class);

                String name = mGiftCards.get(getAdapterPosition()).getName();
                int imgSrc = mGiftCards.get(getAdapterPosition()).getImgSrc();

                intent.putExtra("name", name);
                intent.putExtra("imageSrc", imgSrc);
                mContext.startActivity(intent);
            });
        }

        public void setItem(GiftCard giftCard) {
            mTvGiftCard.setText(giftCard.getName());
            mIvGiftCard.setImageResource(giftCard.getImgSrc());
        }
    }
}
