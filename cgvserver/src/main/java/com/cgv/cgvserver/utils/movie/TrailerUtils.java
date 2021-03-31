package com.cgv.cgvserver.utils.movie;

import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.trailer.Trailer;

public class TrailerUtils {
	public static List<Trailer> parsingToTrailerObject(String trailerUrl, String thumbImageUrl, Movie movieEntity) {
		List<Trailer> list = new ArrayList<>();
		if(trailerUrl != null) {
			String tempTrailer[] = trailerUrl.split("\\|");
			String tempThumbImage[] = thumbImageUrl.split("\\|");
			for (int i = 0; i < tempTrailer.length; i++) {
				Trailer trailer = Trailer.builder()
						.trailerUrl(tempTrailer[i].trim())
						.thumbImageUrl(tempThumbImage[i].trim())
						.movie(movieEntity)
						.build();
				list.add(trailer);
			}
		}
		return list;
	}
}
