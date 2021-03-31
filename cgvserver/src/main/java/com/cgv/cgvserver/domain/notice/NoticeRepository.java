package com.cgv.cgvserver.domain.notice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
	
	@Query(nativeQuery = true, value = "SELECT * FROM notice ORDER BY id DESC")
	List<Notice> mFindAll();

}
