package com.example.cgvapplication.adapter.servicecenter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.cgvapplication.R;
import com.example.cgvapplication.model.faq.Faq;

import java.util.List;

public class ServiceCenterFAQAdapter extends RecyclerView.Adapter<ServiceCenterFAQAdapter.MyViewHolder> {

    private final List<Faq> faqs;

    public ServiceCenterFAQAdapter(List<Faq> faqs) {
        this.faqs = faqs;
    }

    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.frequently_ask_question_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {
        holder.setItem(faqs.get(position));
    }

    @Override
    public int getItemCount() {
        return faqs.size();
    }

    class MyViewHolder extends RecyclerView.ViewHolder {

        private LinearLayout mFrequentlyAskQuestionContainer;
        private TextView mFrequentlyAskQuestionTitle, mFrequentlyAskQuestionContent;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mFrequentlyAskQuestionContainer = itemView.findViewById(R.id.frequently_ask_question_container);
            mFrequentlyAskQuestionTitle = itemView.findViewById(R.id.frequently_ask_question_title);
            mFrequentlyAskQuestionContent = itemView.findViewById(R.id.frequently_ask_question_content);
        }

        public void setItem(Faq faq) {
            mFrequentlyAskQuestionTitle.setText(faq.getTitle());
            mFrequentlyAskQuestionContent.setText(faq.getContent());
        }
    }
}
