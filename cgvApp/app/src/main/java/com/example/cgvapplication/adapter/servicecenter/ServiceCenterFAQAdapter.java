package com.example.cgvapplication.adapter.servicecenter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;

import org.w3c.dom.Text;

public class ServiceCenterFAQAdapter extends RecyclerView.Adapter<ServiceCenterFAQAdapter.MyViewHolder> {


    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_ask_question_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

    }

    @Override
    public int getItemCount() {
        return 4;
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private LinearLayout frequentlyAskQuestionContainer;
        private TextView frequentlyAskQuestionTitle;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            frequentlyAskQuestionContainer = itemView.findViewById(R.id.frequently_ask_question_container);
            frequentlyAskQuestionTitle = itemView.findViewById(R.id.frequently_ask_question_title);
        }

        public void setItem () {

        }
    }
}
