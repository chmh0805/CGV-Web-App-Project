package com.example.cgvapplication.service.dto.user;

import lombok.Data;

@Data
public class UserUpdateReqDto {
    private String nickname;
    private String password;
    private String email;
    private String phone;
}
