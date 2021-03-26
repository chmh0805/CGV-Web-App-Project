package com.cgv.cgvserver.domain.reply;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Reply {
	@Id
	@GeneratedValue
	private Long id;
	
	@JoinColumn(name = "userId")
	@ManyToOne
	private User user;
	
	private String content;
	
	@JoinColumn(name = "reviewId")
	@ManyToOne
	private Review review;
	
	@CreationTimestamp
	private Timestamp createDate;
}
