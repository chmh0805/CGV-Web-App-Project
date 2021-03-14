package com.example.cgvapplication.model.giftshop;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GiftCard {
    // 테스트
    private int id;
    private String name;
    private int imgSrc;
    private String content;
    private String price;
    private String type;
    private String exp; // 유효기간
//    private String cardNum;
//    private String price;
//    private int state;


}
