package com.example.cgvapplication.service.dto.user;

import lombok.Data;

@Data
public class UpdatePasswordReqDto {
    private long userId;
    private String password;
}
