package com.cgv.cgvserver.domain.expectmovie;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ExpectMovieRepository extends JpaRepository<ExpectMovie, Long> {
	List<ExpectMovie> findByUserId(long id);
	
}
