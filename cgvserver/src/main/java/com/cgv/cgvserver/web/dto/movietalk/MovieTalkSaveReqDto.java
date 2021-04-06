package com.cgv.cgvserver.web.dto.movietalk;

import lombok.Data;

@Data
public class MovieTalkSaveReqDto {
	private String movieId;
	private String content;
	private String imageSrc;
	
}
