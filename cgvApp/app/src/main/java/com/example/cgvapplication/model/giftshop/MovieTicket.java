package com.example.cgvapplication.model.giftshop;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieTicket {
    // 테스트
    private int id;
    private String name;
    private String price;
    private int imgSrc;
}
