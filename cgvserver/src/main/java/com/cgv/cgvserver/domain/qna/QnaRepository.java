package com.cgv.cgvserver.domain.qna;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface QnaRepository extends JpaRepository<Qna, Long> {
	List<Qna> findByUserId(long userId);
	
	@Query(nativeQuery = true, value = "SELECT * FROM qna WHERE userId = :userId ORDER BY id DESC")
	List<Qna> mFindByUserIdDesc(long userId);
	
	@Query(nativeQuery = true, value = "SELECT * FROM qna WHERE userId = :userId ORDER BY id DESC LIMIT :limit")
	List<Qna> mFindByUserIdDescLimit(long userId, int limit);
}
