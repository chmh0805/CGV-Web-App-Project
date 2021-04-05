package com.cgv.cgvserver.domain.movie;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
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

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long id; // 번호
	/* 영속성 컨텍스트에서 변경 감지를 하는데 long id를 id로 할 경우
	 * save할 때마다 중복 된 영화가 들어감. 그래서 api에서 받은 아이디를 primary key로....ㅜㅜ
	 */
	@Id
	private String docId;
	@Column(nullable = false)
	private String title;
	
	private String subTitle; //titleEng
	
	private String genre;
	
	private String age; // 연령 rating --> 12세관람가
	
	private String country;
	
	private String company;
	
	private int runningTime;
	
	private String releaseDate; // 상영일(개봉날짜)
	
	private int state;
	
	@Lob
	private String summary; // 시놉 plot
	
	private String disribute; // ??
	
	private String posterImgSrc;

	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<Review> review;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<Actor> actors;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<Director> director;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<StillCut> stillCuts;
	
	@OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
	private List<Trailer> trailers;
}
