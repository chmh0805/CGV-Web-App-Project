package com.example.cgvapplication.service.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JoinReqDto {
    private String username;
    private String name;
    private String nickname;
    private String password;
    private String  email;
    private String phone;
}
