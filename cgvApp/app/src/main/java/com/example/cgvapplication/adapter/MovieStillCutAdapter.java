package com.example.cgvapplication.adapter;

import android.content.Context;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;

import com.example.cgvapplication.FragMovieDetailInfo;
import com.example.cgvapplication.MovieDetailActivity;
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.StillCut;
import com.makeramen.roundedimageview.RoundedImageView;

import java.util.List;

public class MovieStillCutAdapter extends BaseAdapter {

    private static final String TAG = "MovieStillCutAdapter";
    private final List<StillCut> mStillCuts;
    private final Context mContext;

    public MovieStillCutAdapter(List<StillCut> stillCuts, Context mContext) {
        this.mStillCuts = stillCuts;
        this.mContext = mContext;
    }

    @Override
    public int getCount() {
        return mStillCuts.size();
    }

    @Override
    public Object getItem(int i) {
        return mStillCuts.get(i);
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        //FragMovieDetailInfo fragMovieDetailInfo = (FragMovieDetailInfo) parent.getContext();
        Context movieDetailInfoContext = parent.getContext();
        MovieDetailActivity movieDetailContext = (MovieDetailActivity) parent.getContext();
        LayoutInflater inflater = (LayoutInflater) movieDetailContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View view = inflater.inflate(R.layout.movie_stillcut_item, parent, false);
        RoundedImageView IvStillCut = view.findViewById(R.id.iv_still_cut);
        IvStillCut.setImageResource(mStillCuts.get(position).getStillCutImgSrc());

        return view;
    }
}
