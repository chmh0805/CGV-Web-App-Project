package com.cgv.cgvserver.domain.review;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.reply.Reply;
import com.cgv.cgvserver.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Review {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonBackReference
	@JoinColumn(name = "userId")
	@ManyToOne
	private User user;
	
	private String content;
	
	@JsonBackReference
	@JoinColumn(name = "movieId")
	@ManyToOne
	private Movie movie;
	
	private int isLike; // 좋아요 유무 1: 좋아요 0: x
	
	@OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
	private List<Reply> replys;
	
	@CreationTimestamp
	private Timestamp createDate;
}
