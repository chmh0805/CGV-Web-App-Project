package com.cgv.cgvserver.domain.movie;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.director.Director;
import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.domain.stillcut.StillCut;
import com.cgv.cgvserver.domain.trailer.Trailer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // 번호
	
	@Column(nullable = false)
	private String title;
	
	private String subTitle;
	
	private String genre;
	
	private int age;
	
	private String country;
	
	private int runningTime;
	
	private String releaseDate; // 상영일
	
	private int state;
	
	private String summary;
	
	private String disribute;
	
	private String posterImgSrc;

	@OneToMany(mappedBy = "movie", cascade = CascadeType.REMOVE)
	private List<Review> review;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.REMOVE)
	private List<Actor> actors;
	
	@OneToOne(mappedBy = "movie", cascade = CascadeType.REMOVE)
	private Director director;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.REMOVE)
	private List<StillCut> stillCuts;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.REMOVE)
	private List<Trailer> trailers;
}
