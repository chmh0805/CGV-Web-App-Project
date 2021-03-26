package com.cgv.cgvserver.domain.qna;

import java.sql.Timestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.notice.Notice;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
//@Entity
public class Qna {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private int sort;
	
	private String title;
	
	private String content;
	
	private int state; // 처리상태 0:미처리 1:답변완료
	
	@ManyToOne
	private User user;
	
//	@CreationTimestamp
//	private Timestamp createDate;
}
