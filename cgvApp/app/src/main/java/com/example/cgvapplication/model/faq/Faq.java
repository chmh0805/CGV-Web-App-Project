package com.example.cgvapplication.model.faq;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Faq {

    private Long id;
    private int sort;
    private String title;
    private String content;
    private int readCount;
    private Timestamp createDate;

    public Faq(String title) {
        this.title = title;
    }
}
