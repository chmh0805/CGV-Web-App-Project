package com.cgv.cgvserver.handler;

import java.util.List;

import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.cgv.cgvserver.handler.exception.logs.ExceptionLog;
import com.cgv.cgvserver.handler.exception.logs.ExceptionLogRepository;

import lombok.RequiredArgsConstructor;

@EnableScheduling
@RequiredArgsConstructor
@Component
public class MyBatch {

	private final ExceptionList exceptionList;
	private final ExceptionLogRepository exceptionLogRepository;
	
	@Scheduled(fixedDelay = 1000*60*10) // Cron 정기적 실행
	public void excute() {
		List<ExceptionLog> exList = exceptionList.getExList();
		exceptionLogRepository.saveAll(exList);
		exList.clear();
	}
}
