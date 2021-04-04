package com.cgv.cgvserver.domain.expectmovie;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ExpectMovieRepository extends JpaRepository<ExpectMovie, Long> {
	List<ExpectMovie> findByUserId(long id);
	
	@Modifying
	@Query(value = "INSERT INTO expectmovie(movieId, userId) VALUES(:movieId, :userId)", nativeQuery = true)
	int mExpect(long userId, String movieId);
	
	@Modifying
	@Query(value = "DELETE FROM expectmovie WHERE movieId = :movieId AND userId = :userId", nativeQuery = true)
	int mUnExpect(long userId, String movieId);
}
