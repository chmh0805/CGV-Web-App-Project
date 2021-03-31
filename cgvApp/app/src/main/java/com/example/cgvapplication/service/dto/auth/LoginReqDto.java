package com.example.cgvapplication.service.dto.auth;

import com.example.cgvapplication.model.user.User;

import lombok.Data;

@Data
public class LoginReqDto {
    private String username;
    private String password;
}
