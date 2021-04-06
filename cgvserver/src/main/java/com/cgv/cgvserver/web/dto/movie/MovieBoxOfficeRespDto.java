package com.cgv.cgvserver.web.dto.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class MovieBoxOfficeRespDto {
	private int rankNum;
	private String docId;
	private String posterImageSrc;
	private String title;
	private String releaseDate;
	private String age;
}
