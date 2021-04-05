package com.cgv.cgvserver.domain.hall;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HallRepository extends JpaRepository<Hall, Long> {
//	@Query("SELECT * FROM hall WHERE theaterId = :theaterId")
//	List<Hall> halls(long theaterId);
}
