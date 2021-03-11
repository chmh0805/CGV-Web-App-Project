package com.example.cgvapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.GridLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.adapter.GiftCardListAdapter;
import com.example.cgvapplication.model.giftshop.GiftCard;

import java.util.ArrayList;
import java.util.List;

public class FragGiftShopGiftcard extends Fragment {
    private RecyclerView mRvGiftCardItem;
    private GiftCardListAdapter mGiftCardListAdapter;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_giftshop_giftcard, container, false);

        mRvGiftCardItem = view.findViewById(R.id.rv_giftcard_item);
        List<GiftCard> giftCards = new ArrayList<>();
        for (int i=0; i<5; i++) {
            giftCards.add(new GiftCard(i, "루돌프 파코니", R.drawable.giftshop_rudolf_paconnie));
        }
        GridLayoutManager gridLayoutManager = new GridLayoutManager(view.getContext(), 2);
        mRvGiftCardItem.setLayoutManager(gridLayoutManager);
//        LinearLayoutManager giftCardManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
//        mRvGiftCardItem.setLayoutManager(giftCardManager);

        mGiftCardListAdapter = new GiftCardListAdapter(giftCards, R.layout.giftshop_giftcard_grid_item);
        mRvGiftCardItem.setAdapter(mGiftCardListAdapter);
        return view;
    }
}
