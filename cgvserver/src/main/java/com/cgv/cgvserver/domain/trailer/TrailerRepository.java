package com.cgv.cgvserver.domain.trailer;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TrailerRepository extends JpaRepository<Trailer, Long> {
//	List<Trailer> findByMovieId(String movieId);
	//List<Trailer> findByMovie(Movie movie);
//	@Query(value="SELECT trailerUrl FROM trailer WHERE movieId = :movieId", nativeQuery = true)
//	List<Trailer> mTrailers(String movieId);
}
