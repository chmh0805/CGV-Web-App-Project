package com.cgv.cgvserver.domain.watchedmovie;

import java.sql.Timestamp;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.trailer.Trailer;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Entity
public class WatchedMovie {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@JoinColumn(name = "userId")
//	@ManyToOne
	private User user;
	
//	@JoinColumn(name = "userId")
//	@OneToOne
//	private Ticketing ticketing;
	
//	private String graded;
	
//	@CreationTimestamp
	private Timestamp createDate;
}
