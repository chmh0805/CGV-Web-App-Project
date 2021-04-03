package com.cgv.cgvserver.web.dto.ticketing;

import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TicketingSaveReqDto {
	@NotEmpty(message = "personType을 입력하세요.(0:청소년, 1:일반, 2:우대)")
	private int personType; // 0: 청소년, 1:일반, 2:우대
	@NotEmpty(message = "seatId를 입력하세요.")
	private long seatId;
	@NotEmpty(message = "timeTableId를 입력하세요.")
	private long timeTableId;
	@NotEmpty(message = "userId를 입력하세요.")
	private long userId;
}
