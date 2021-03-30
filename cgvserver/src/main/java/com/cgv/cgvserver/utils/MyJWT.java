package com.cgv.cgvserver.utils;

import java.util.Map;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

public class MyJWT {

	public static long getId(String token) {
		DecodedJWT jwt = JWT.decode(token);
		
		Map<String, Claim> claims = jwt.getClaims();
		
		return claims.get("userId").asLong();
	}
}
