package com.cgv.cgvserver.domain.review;

import java.sql.Timestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.movie.Movie;
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
public class Review {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@ManyToOne
	private User user;
	
	private String content;
	
//	@ManyToOne
	private Movie movie;
	
//	@CreationTimestamp
	private Timestamp createDate;
}
