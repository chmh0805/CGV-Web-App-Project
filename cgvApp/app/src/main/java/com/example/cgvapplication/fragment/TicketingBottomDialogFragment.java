package com.example.cgvapplication.fragment;

import android.content.Intent;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.example.cgvapplication.R;
import com.example.cgvapplication.activity.SeatChoiceActivity;
import com.google.android.material.bottomsheet.BottomSheetDialogFragment;

public class TicketingBottomDialogFragment extends BottomSheetDialogFragment {
    private static final String TAG = "TicketingBottomDialogFr";
    private Button mBtnPersonChoice;
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        View view = getLayoutInflater().inflate(R.layout.ticketing_person_bottom_sheet, container, false);
        init(view);
        listener();

        return view;
    }

    private void init(View view) {
        mBtnPersonChoice = view.findViewById(R.id.btn_person_choice);

    }

    private void listener() {
        mBtnPersonChoice.setOnClickListener(view -> {
            Intent intent = new Intent(getContext(), SeatChoiceActivity.class);
            startActivity(intent);
        });
    }
}
