package com.example.cgvapplication.model.giftshop;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// 테스트
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Combo {
    private int id;
    private String name;
    private String content;
    private String price;
    private int imgSrc;

}
