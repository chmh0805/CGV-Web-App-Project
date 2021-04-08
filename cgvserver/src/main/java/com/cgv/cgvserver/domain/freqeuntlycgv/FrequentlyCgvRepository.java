package com.cgv.cgvserver.domain.freqeuntlycgv;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface FrequentlyCgvRepository extends JpaRepository<FrequentlyCgv, Long> {
	List<FrequentlyCgv> findByUserId(long userId);
	
	@Modifying
	@Query(value = "DELETE FROM frequentlycgv WHERE theaterId = :theaterId AND userId = :userId", nativeQuery = true)
	void deleteByIdAndUserId(long theaterId, long userId);
}
