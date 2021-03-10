package com.example.cgvapplication.giftshop;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.example.cgvapplication.R;

public class FragGiftShopTicket extends Fragment {
   // private ImageView mIvGftAdd;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_giftshop_ticket, container, false);
//        mIvGftAdd = view.findViewById(R.id.iv_gift_add);
//        mIvGftAdd.bringToFront();
        return view;
    }
}
