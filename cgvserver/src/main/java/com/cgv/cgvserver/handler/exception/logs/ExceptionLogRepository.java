package com.cgv.cgvserver.handler.exception.logs;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ExceptionLogRepository extends JpaRepository<ExceptionLog, Long>{
	
}
