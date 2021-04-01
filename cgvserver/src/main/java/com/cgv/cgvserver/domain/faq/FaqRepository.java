package com.cgv.cgvserver.domain.faq;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface FaqRepository extends JpaRepository<Faq, Long> {

	@Query(nativeQuery = true, value = "SELECT * FROM faq ORDER BY id DESC")
	List<Faq> mFindAll();
	
	@Query(nativeQuery = true, value = "SELECT * FROM faq WHERE title LIKE %:keyword% OR content LIKE %:keyword% ORDER BY id DESC")
	List<Faq> mFindByKeyword(String keyword);
}
