package com.example.cgvapplication;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.adapter.ComboListAdapter;
import com.example.cgvapplication.adapter.GiftCardListAdapter;
import com.example.cgvapplication.model.giftshop.Combo;
import com.example.cgvapplication.model.giftshop.GiftCard;

import java.util.ArrayList;
import java.util.List;

public class FragGiftShop extends Fragment {
    private RecyclerView mRvGiftCardItem, mRvComboItem;
    private GiftCardListAdapter mGiftCardListAdapter;
    private ComboListAdapter mComboListAdapter;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_giftshop, container, false);
        mRvGiftCardItem = view.findViewById(R.id.rv_giftcard_item);
        List<GiftCard> giftCards = new ArrayList<>();
        for (int i=0; i<5; i++) {
            giftCards.add(new GiftCard(i, "루돌프 파코니", R.drawable.giftshop_rudolf_paconnie));
        }
        LinearLayoutManager giftCardManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvGiftCardItem.setLayoutManager(giftCardManager);
        mGiftCardListAdapter = new GiftCardListAdapter(giftCards);
        mRvGiftCardItem.setAdapter(mGiftCardListAdapter);

        mRvComboItem = view.findViewById(R.id.rv_combo_item);
        List<Combo> combos = new ArrayList<>();
        for (int i=0; i<3; i++) {
            combos.add(new Combo(i, "CGV콤보", "CGV의 영원한 베스트셀러!", "9,000원", R.drawable.cgv_combo));
        }
        LinearLayoutManager ComboManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvComboItem.setLayoutManager(ComboManager);
        mComboListAdapter = new ComboListAdapter(combos);
        mRvComboItem.setAdapter(mComboListAdapter);

        return view;
    }
}
