package com.cgv.cgvserver.domain.movietalk;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MovieTalkRepository extends JpaRepository<MovieTalk, Long>{
	
	@Query(value = "SELECT * FROM movietalk ORDER BY id DESC ", nativeQuery = true)
	List<MovieTalk> mMovieTalk();


}
