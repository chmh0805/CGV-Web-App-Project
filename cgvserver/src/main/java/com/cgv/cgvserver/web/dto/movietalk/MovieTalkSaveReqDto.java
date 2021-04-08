package com.cgv.cgvserver.web.dto.movietalk;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class MovieTalkSaveReqDto {
	private String movieId;
	private String content;
	private String imageSrc;
	
}
