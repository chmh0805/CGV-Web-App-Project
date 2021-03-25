package com.cgv.cgvserver.domain.actor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.seat.Seat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Entity
public class Actor {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String actorImageUrl;
	
	private String name;
	
	private String characterName;
	
//	@ManyToOne
	private Movie movie;
	
}
