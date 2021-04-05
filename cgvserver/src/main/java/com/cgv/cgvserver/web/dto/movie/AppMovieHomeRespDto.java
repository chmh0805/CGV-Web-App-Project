package com.cgv.cgvserver.web.dto.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppMovieHomeRespDto {
	private int rankNum;
	private String docId;
	private String posterImgSrc;
	private String title;
	private String releaseDate;
	private String imageUrl;
	private String thumbImageUrl;
	private String trailerUrl;

}
