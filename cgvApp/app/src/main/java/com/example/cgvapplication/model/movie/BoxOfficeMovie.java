package com.example.cgvapplication.model.movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BoxOfficeMovie {
    private int rankNum;
    private Movie movie;
}
