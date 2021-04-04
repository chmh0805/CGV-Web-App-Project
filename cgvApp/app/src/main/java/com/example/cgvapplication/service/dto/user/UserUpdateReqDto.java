package com.example.cgvapplication.service.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserUpdateReqDto {
    private String nickname;
    private String password;
    private String email;
    private String phone;
}
