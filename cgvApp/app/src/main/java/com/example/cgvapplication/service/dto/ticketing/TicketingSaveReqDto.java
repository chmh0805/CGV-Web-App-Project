package com.example.cgvapplication.service.dto.ticketing;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TicketingSaveReqDto {

    private int personType; // 0: 청소년, 1:일반, 2:우대
    private long seatId;
    private long timeTableId;
    private long userId;

}
