package com.cgv.cgvserver.domain.qna;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QnaRepository extends JpaRepository<Qna, Long> {
	List<Qna> findByUserId(long userId);
}
