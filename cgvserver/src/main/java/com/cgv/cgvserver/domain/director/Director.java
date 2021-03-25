package com.cgv.cgvserver.domain.director;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

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
public class Director {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String directorImageUrl;
	
	private String directorName;
	
//	@OneToMany(mappedBy = "director")
	private List<Movie> movie;
}
