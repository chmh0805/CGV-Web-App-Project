package com.example.cgvapplication.model.user;

import com.example.cgvapplication.model.expectmovie.ExpectMovie;
import com.example.cgvapplication.model.frequentlycgv.FrequentlyCgv;
import com.example.cgvapplication.model.ticketing.Ticketing;

import java.sql.Timestamp;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Long id;
    private String username;
    private String password;
    private String name;
    private String nickname;
    private String email;
    private String phone;
    private String role;
    private Boolean agreeAd;
    private Timestamp agreeDate;
    private String profileImage; //url

    private List<ExpectMovie> expectMovies;
    private List<FrequentlyCgv>  frequentlyCgvs;
    private List<Ticketing> ticketings;
}
