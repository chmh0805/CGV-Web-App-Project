package com.cgv.cgvserver.utils;

import java.util.Map;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;


public class MyJWT {

	public static long getId() {
		String token = "";
		DecodedJWT jwt = JWT.decode(token);
		
		ObjectMapper om = new ObjectMapper();
		
		Map<String, Claim> claims = jwt.getClaims();
		Long userId = claims.get("userId").asLong();

		System.out.println(userId);
		return 0;
	}
	
	public static void main(String[] args) {
		MyJWT.getId();
	}
}
