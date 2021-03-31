package com.cgv.cgvserver.utils.movie;

import com.cgv.cgvserver.domain.movie.BoxOfficeMovie;
import com.cgv.cgvserver.domain.movie.Movie;

public class BoxOfficeUtils {
	public static BoxOfficeMovie boxOfficeMovieObject(int rank, Movie movieEntity) {
		return  BoxOfficeMovie.builder()
				.rankNum(rank)
				.movie(movieEntity)
				.build();
		
	}
}
