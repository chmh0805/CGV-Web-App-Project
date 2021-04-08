package com.cgv.cgvserver.web.dto.review;

import java.math.BigInteger;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ReviewCountRespDto {
	private BigInteger count;
}
