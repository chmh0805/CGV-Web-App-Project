package com.example.cgvapplication.model.alert;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Alert {

    private Long id;
    private String content;
    private Timestamp createDate;
}
