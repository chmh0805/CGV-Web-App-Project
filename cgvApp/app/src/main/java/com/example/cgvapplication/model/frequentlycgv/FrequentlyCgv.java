package com.example.cgvapplication.model.frequentlycgv;

import com.example.cgvapplication.model.theater.Theater;
import com.example.cgvapplication.model.user.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FrequentlyCgv {

    private Long id;
    private User user;
    private Theater theater;
}
