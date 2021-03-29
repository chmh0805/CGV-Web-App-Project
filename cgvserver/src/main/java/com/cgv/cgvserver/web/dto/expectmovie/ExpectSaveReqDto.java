package com.cgv.cgvserver.web.dto.expectmovie;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExpectSaveReqDto {
	@NotEmpty(message = "영화 정보를 찾을 수 없습니다.")
	private long movieId;

	@NotEmpty(message = "유저 정보를 찾을 수 없습니다.")
	private long userId;
}
