package com.cgv.cgvserver.web.dto.review;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewFindRespDto {
	private long id;
	private String content;
	private int isLike;
	private User user;
	private Movie movie;
	private String createDate;
}
