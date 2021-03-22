package com.cgv.cgvserver.config.auth;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.cgv.cgvserver.web.user.dto.LoginReqDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtLoginFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		System.out.println("로그인 요청 옴");
		
		ObjectMapper om = new ObjectMapper();
		LoginReqDto loginReqDto = null;
		
		try {
			loginReqDto = om.readValue(request.getInputStream(), LoginReqDto.class);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		// 1. UsernamePassword 토큰 만들기
		UsernamePasswordAuthenticationToken authToken
			= new UsernamePasswordAuthenticationToken(loginReqDto.getUsername(), loginReqDto.getPassword());
		
		// 2. AuthenticationManager에게 토큰을 전달하면 자동으로 UsersDetailService 호출 => 응답 Authentication
		Authentication authentication = authenticationManager.authenticate(authToken);
		return authentication;
	}
	
	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		PrincipalDetails principalDetails = (PrincipalDetails) authResult.getPrincipal();
		
		String jwtToken = JWT.create()
							.withSubject("cgvToken")
							.withExpiresAt(new Date(System.currentTimeMillis() + 1000*60*10))
							.withClaim("userId", principalDetails.getUser().getId())
							.sign(Algorithm.HMAC512("영화관"));
		
		System.out.println("jwtToken : " + jwtToken);
		response.setHeader("Authorization", "Bearer " + jwtToken);
	}
}
