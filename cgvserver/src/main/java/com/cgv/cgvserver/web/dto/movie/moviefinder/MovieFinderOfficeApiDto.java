package com.cgv.cgvserver.web.dto.movie.moviefinder;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class MovieFinderOfficeApiDto {
	private String movieCd; // 영화코드
	private String movieNm; // 영화명(한글)
	private String movieNmEn; // 영화명(영어)
	private String prdtYear; // 개봉연도
	private String openDt; // 개봉일자
	private String typeNm; // 영화유형
	private String prdtStatNm; // 제작상태
	private String nationAlt; // 제작국가(전체)
	private String genreAlt; // 영화장르(전체)
	private String repNationNm; // 대표 제작국가명
	private String repGenreNm; // 대표장르명
	private Directors[] directors; // 영화감독
	private Companys[] companys; // 제작사
}
