package com.cgv.cgvserver.web.dto.movie;

import com.cgv.cgvserver.domain.movie.Movie;

import lombok.Data;

@Data
public class MovieReqDto {
	private String docId;
	private String title;
	private String subTitle;
	private String genre;
	private String age;
	private String country;
	private String company;
	private int runningTime;
	private String releaseDate;
	private String summary;
	private String posterImgSrc;
	private String trailerUrls;
	private String stillCutImgSrc;
	private String directors;
	private String actors;
	private int rank;
	private String boxOfficeDate;
	private String thumbImageUrls;
	
	public String getTitle() {
		String title = this.title.replaceAll("!HS", "").replaceAll("!HE", "").trim();
		return title;
	}
	
	public Movie toEntity() {
		return Movie.builder()
				.docId(docId)
				.title(title)
				.subTitle(subTitle)
				.genre(genre)
				.age(age)
				.country(country)
				.company(company)
				.runningTime(runningTime)
				.releaseDate(releaseDate)
				.summary(summary)
				.posterImgSrc(posterImgSrc)
				.build();
	}
	
}
