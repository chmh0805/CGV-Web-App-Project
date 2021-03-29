package com.cgv.cgvserver.web.dto.theater;

import javax.validation.constraints.NotEmpty;

import org.springframework.web.multipart.MultipartFile;

import com.cgv.cgvserver.domain.theater.Theater;

import lombok.Data;

@Data
public class TheaterSaveReqDto {
	@NotEmpty(message = "이름을 입력하세요.")
	private String name;
	
	@NotEmpty(message = "위치를 입력하세요.")
	private String location;
	
	@NotEmpty(message = "연락처를 입력하세요.")
	private String phone;
	
	private MultipartFile theaterImage;
	
	public Theater toEntity(String imgUrl) {
		return Theater.builder()
				.name(name)
				.location(location)
				.phone(phone)
				.theaterImageUrl(imgUrl)
				.build();
	}
}
