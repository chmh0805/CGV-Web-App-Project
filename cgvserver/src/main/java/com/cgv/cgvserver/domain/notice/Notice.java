package com.cgv.cgvserver.domain.notice;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
//@Entity
public class Notice {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private int sort; // 1:극장 2:시스템점검 3:기타
	
	private String content;
	
	private int readCount; // 조회수
	
//	@CreationTimestamp
//	private Timestamp createDate;
}
