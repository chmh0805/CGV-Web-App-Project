
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;


import com.bumptech.glide.Glide;
import com.example.cgvapplication.R;
import com.example.cgvapplication.model.movie.Movie;
import com.example.cgvapplication.service.dto.movie.MovieBoxOfficeRespDto;
import com.makeramen.roundedimageview.RoundedImageView;

import java.util.List;

public class TicketingMoviePosterAdapter extends RecyclerView.Adapter<TicketingMoviePosterAdapter.MyViewHolder>{

    private final List<MovieBoxOfficeRespDto> movies;

    public TicketingMoviePosterAdapter(List<MovieBoxOfficeRespDto> movies) {
        this.movies = movies;
    }


    @NonNull
    @Override
    public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.ticketing_poster_item, parent, false);

        return new MyViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull MyViewHolder holder, int position) {

        holder.setItem(movies.get(position));
        //mRvTicketingPosterList.scrollToPosition();



    }

    @Override
    public int getItemCount() {

        return movies.size();

    }

    public static class MyViewHolder extends RecyclerView.ViewHolder {

        private RoundedImageView mIvPoster;

        public MyViewHolder(@NonNull View itemView) {
            super(itemView);
            mIvPoster = itemView.findViewById(R.id.iv_poster);
        }


        public void setItem(MovieBoxOfficeRespDto movie) {
            Glide
                    .with(itemView)
                    .load(movie.getPosterImageSrc())
                    .centerCrop()
                    .into(mIvPoster);
        }
    }
}
