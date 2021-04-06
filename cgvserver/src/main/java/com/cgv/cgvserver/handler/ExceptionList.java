package com.cgv.cgvserver.handler;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cgv.cgvserver.handler.exception.logs.ExceptionLog;

import lombok.Data;

@Data
@Component
public class ExceptionList {
	
	public List<ExceptionLog> exList = new ArrayList<>();
	
	public void addExceptionLog(ExceptionLog log) {
		exList.add(log);
	}
}
