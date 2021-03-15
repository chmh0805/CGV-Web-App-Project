package com.example.cgvapplication;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.adapter.ComboListAdapter;
import com.example.cgvapplication.adapter.GiftCardListAdapter;
import com.example.cgvapplication.adapter.MovieTicketListAdapter;
import com.example.cgvapplication.model.giftshop.Combo;
import com.example.cgvapplication.model.giftshop.GiftCard;
import com.example.cgvapplication.model.giftshop.MovieTicket;

import java.util.ArrayList;
import java.util.List;

public class FragGiftShop extends Fragment {

    private static final String TAG = "FragGiftShop";
    private final FragGiftShop mFragGiftShop = this;
    private RecyclerView mRvGiftCardItem, mRvComboItem, mRvMovieTicketItem;
    private GiftCardListAdapter mGiftCardListAdapter;
    private MovieTicketListAdapter mMovieTicketListAdapter;
    private ComboListAdapter mComboListAdapter;
    private LinearLayout mLinearPackageBtn, mLinearComboBtn, mLinearGiftcardBtn, mLinearTicketBtn;
    private List<GiftCard> giftCards;
    private List<Combo> combos;
    private List<MovieTicket> movieTickets;



    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.frag_giftshop, container, false);
        init(view);
        initData();
        listener();

        return view;
    }

    private void init(View view) {
        giftCards = new ArrayList<>();
        combos = new ArrayList<>();
        movieTickets = new ArrayList<>();

        mRvGiftCardItem = view.findViewById(R.id.rv_giftcard_item);
        mRvComboItem = view.findViewById(R.id.rv_combo_item);
        mRvMovieTicketItem = view.findViewById(R.id.rv_movie_ticket_item);
        mLinearPackageBtn = view.findViewById(R.id.linear_package_btn);
        mLinearComboBtn = view.findViewById(R.id.linear_combo_btn);
        mLinearTicketBtn = view.findViewById(R.id.linear_ticket_btn);
        mLinearGiftcardBtn = view.findViewById(R.id.linear_giftcard_btn);

        LinearLayoutManager giftCardManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvGiftCardItem.setLayoutManager(giftCardManager);
        mGiftCardListAdapter = new GiftCardListAdapter(giftCards, mFragGiftShop.getContext(), R.layout.gfitshop_giftcard_item);
        mRvGiftCardItem.setAdapter(mGiftCardListAdapter);

        LinearLayoutManager ComboManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvComboItem.setLayoutManager(ComboManager);
        mComboListAdapter = new ComboListAdapter(combos);
        mRvComboItem.setAdapter(mComboListAdapter);

        LinearLayoutManager movieTicketManager = new LinearLayoutManager(view.getContext(), RecyclerView.VERTICAL, false);
        mRvMovieTicketItem.setLayoutManager(movieTicketManager);
        mMovieTicketListAdapter = new MovieTicketListAdapter(movieTickets, mFragGiftShop.getContext(), R.layout.giftshop_ticket_item);
        mRvMovieTicketItem.setAdapter(mMovieTicketListAdapter);

    }


    private void initData() {
        for (int i=0; i<5; i++) {
            giftCards.add(new GiftCard(i, "루돌프 파코니", R.drawable.giftshop_rudolf_paconnie, "귀여운 루돌프 파코니카드로 감사의 마음을 선물하세요.", "금액충전형", "충전형 선불 카드", "구매 또는 최종 충전일로부터 5년"));
        }
        for (int i=0; i<3; i++) {
            combos.add(new Combo(i, "CGV콤보", "CGV의 영원한 베스트셀러!", "9,000원", R.drawable.cgv_combo));
        }
        for (int i=0; i<2; i++) {
            movieTickets.add(new MovieTicket(i, "CGV 영화관람권", R.drawable.cgv_movie_ticket, "CGV 영화관람권으로 즐거운 영화관람하세요!", "11,000원" , "일반 영화관람권", "구매일로부터 24개월 이내"));
        }

    }

    private void listener() {
        mLinearTicketBtn.setOnClickListener(v -> {
            Intent intent = new Intent(v.getContext(), GiftshopActivity.class);
            startActivity(intent);
        });

        mLinearGiftcardBtn.setOnClickListener(v -> {
            int page = 1;
            Intent intent = new Intent(v.getContext(), GiftshopActivity.class);
            intent.putExtra("Giftcard", page);
            startActivity(intent);
        });
    }
    
}
