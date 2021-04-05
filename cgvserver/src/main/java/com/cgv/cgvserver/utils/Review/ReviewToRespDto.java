package com.cgv.cgvserver.utils.Review;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.web.dto.review.ReviewFindRespDto;

public class ReviewToRespDto {
	public static List<ReviewFindRespDto> toDtos(List<Review> reviewEntities) {
		List<ReviewFindRespDto> dtos = new ArrayList<>();

		for (Review review : reviewEntities) {
			SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");

			ReviewFindRespDto dto = ReviewFindRespDto.builder()
					.id(review.getId())
					.content(review.getContent())
					.user(review.getUser())
					.movie(review.getMovie())
					.createDate(format.format(review.getCreateDate()).toString())
					.build();
			
			dtos.add(dto);
		}
		
		return dtos;
	}
}
