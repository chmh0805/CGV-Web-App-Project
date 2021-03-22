package com.example.cgvapplication.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.CheckBox;
import android.widget.Spinner;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

public class ShoppingBasketAdapter extends RecyclerView.Adapter<ShoppingBasketAdapter.MyViewHolder> {

    private final Context mContext;

    private static final String TAG = "ShoppingBasketAdapter";
    public ShoppingBasketAdapter(Context context) {
        this.mContext = context;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.shopping_basket_item, parent, false);
        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 10;
    }

    public class MyViewHolder extends RecyclerView.ViewHolder {
        private Integer[] items = {1,2,3,4,5,6,7,8,9,10};
        private Spinner mSpNum;
        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mSpNum = itemView.findViewById(R.id.sp_num);
            ArrayAdapter<Integer> adapter = new ArrayAdapter<Integer>(mContext, android.R.layout.simple_spinner_item, items);
            adapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
            mSpNum.setAdapter(adapter);
        }
    }
}
