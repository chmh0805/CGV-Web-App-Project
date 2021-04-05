package com.cgv.cgvserver.web.dto.ticketing;

import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TicketingSaveReqDto {
	@NotNull(message = "personType을 입력하세요.(0:청소년, 1:일반, 2:우대)")
	private int personType; // 0: 청소년, 1:일반, 2:우대
	@NotNull(message = "seatId를 입력하세요.")
	private long seatId;
	@NotNull(message = "timeTableId를 입력하세요.")
	private long timeTableId;
	@NotNull(message = "userId를 입력하세요.")
	private long userId;
}
