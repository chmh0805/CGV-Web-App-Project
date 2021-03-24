package com.cgv.cgvserver.web.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommonRespDto<T> {
	private int statusCode; // 1:성공 -1:실패
	private T data;
}
