package com.cgv.cgvserver.web.dto.review;

import java.util.List;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.reply.Reply;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.web.dto.qna.QnaFindRespDto;

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
