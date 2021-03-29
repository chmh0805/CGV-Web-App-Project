package com.cgv.cgvserver.utils;

import java.util.Date;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

public class MyJWT {

	public String createJWTToken(Long id) {
		String jwtToken = JWT.create()
				.withSubject("cgvToken")
				.withExpiresAt(new Date(System.currentTimeMillis() + 1000*60*10))
				.withClaim("userId", id)
				.sign(Algorithm.HMAC512("영화관"));
		
		return jwtToken;
	}
}
