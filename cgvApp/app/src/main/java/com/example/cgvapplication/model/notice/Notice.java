package com.example.cgvapplication.model.notice;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notice {
    private Long id;
    private int sort;
    private String title;
    private String content;
    private int readCount;
    private Timestamp createDate;

    public Notice (String title) {
        this.title =title;
    }
}
