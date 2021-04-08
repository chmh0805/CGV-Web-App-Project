package com.cgv.cgvserver.domain.review;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ReviewRepository extends JpaRepository<Review, Long> {
	
	@Query(nativeQuery = true, value = "SELECT * FROM review WHERE movieId = :movieId ORDER BY id DESC")
	List<Review> mFindByMovieIdDesc(String movieId);
	
	@Query(nativeQuery = true, value = "SELECT * FROM review WHERE userId = :userId ORDER BY id DESC")
	List<Review> mFindByUserIdDesc(long userId);
	

}
