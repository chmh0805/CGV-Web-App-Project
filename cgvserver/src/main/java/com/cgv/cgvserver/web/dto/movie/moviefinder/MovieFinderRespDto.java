package com.cgv.cgvserver.web.dto.movie.moviefinder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class MovieFinderRespDto {
	private String title; // 제목
	private String imgUrl; // 사진url
	private String openDt; // 개봉일자 "yyyy-MM-dd"
}
