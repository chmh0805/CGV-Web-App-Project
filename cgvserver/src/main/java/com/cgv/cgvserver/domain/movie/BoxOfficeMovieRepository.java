package com.cgv.cgvserver.domain.movie;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface BoxOfficeMovieRepository extends JpaRepository<BoxOfficeMovie, Integer>{
	
	@Query(value = "SELECT * FROM boxofficemovie WHERE movieId = :movieId", nativeQuery = true)
	BoxOfficeMovie mBoxOfficeMovie(String movieId);
	
}
