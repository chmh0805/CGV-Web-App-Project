package com.example.cgvapplication.adapter;

import android.content.Context;
import android.content.Intent;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.activity.GiftShopDetailActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.giftshop.GiftCard;

import java.util.List;

public class GiftCardListAdapter extends RecyclerView.Adapter<GiftCardListAdapter.MyViewHolder> {

    private final List<GiftCard> mGiftCards;
    private final Context mContext;
    private final int mLayoutRes;

    public GiftCardListAdapter(List<GiftCard> giftCards, Context context, int layoutRes) {
        this.mGiftCards = giftCards;
        this.mContext = context;
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
        private TextView mTvGiftCard, mTvGiftCardPrice;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);

            mTvGiftCard = itemView.findViewById(R.id.tv_gift_card);
            mIvGiftCard = itemView.findViewById(R.id.iv_gift_card);
            mTvGiftCardPrice = itemView.findViewById(R.id.tv_gift_card_price);

            itemView.setOnClickListener(v -> {
                Intent intent = new Intent(mContext, GiftShopDetailActivity.class);

                String name = mGiftCards.get(getAdapterPosition()).getName();
                String price = mGiftCards.get(getAdapterPosition()).getPrice();
                String content = mGiftCards.get(getAdapterPosition()).getContent();
                String type = mGiftCards.get(getAdapterPosition()).getType();
                String exp = mGiftCards.get(getAdapterPosition()).getExp();
                int imgSrc = mGiftCards.get(getAdapterPosition()).getImgSrc();

                intent.putExtra("name", name);
                intent.putExtra("imageSrc", imgSrc);
                intent.putExtra("price", price);
                intent.putExtra("content", content);
                intent.putExtra("type", type);
                intent.putExtra("exp", exp);

                mContext.startActivity(intent);
            });
        }

        public void setItem(GiftCard giftCard) {
            mTvGiftCard.setText(giftCard.getName());
            mIvGiftCard.setImageResource(giftCard.getImgSrc());
            mTvGiftCardPrice.setText(giftCard.getPrice());
        }
    }
}
