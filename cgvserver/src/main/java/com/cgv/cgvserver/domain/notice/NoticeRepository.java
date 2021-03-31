package com.cgv.cgvserver.domain.notice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
	

	@Query(nativeQuery = true, value = "SELECT n.* FROM notice n ORDER BY n.id DESC LIMIT :limit")
	List<Notice> mFindAllDescLimit(int limit);
	
	@Query(nativeQuery = true, value = "SELECT * FROM notice ORDER BY id DESC")
	List<Notice> mFindAll();
	
	@Query(nativeQuery = true, value = "SELECT * FROM notice WHERE title LIKE %:keyword% OR content LIKE %:keyword% ORDER BY id DESC")
	List<Notice> mFindByKeyword(String keyword);

}
