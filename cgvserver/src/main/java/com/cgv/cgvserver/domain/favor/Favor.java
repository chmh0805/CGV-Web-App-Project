package com.cgv.cgvserver.domain.favor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.seat.Seat;
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
public class Favor {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
//	@JoinColumn(name = "userId")
//	@ManyToOne
	private User user;
	
	
	private Movie movie;
}
