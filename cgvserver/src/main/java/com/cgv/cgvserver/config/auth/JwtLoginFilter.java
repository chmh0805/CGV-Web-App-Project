package com.cgv.cgvserver.config.auth;

import java.io.IOException;
import java.util.Date;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.cgv.cgvserver.web.dto.user.LoginReqDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtLoginFilter extends UsernamePasswordAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	private static final Logger log = LoggerFactory.getLogger(JwtLoginFilter.class);

	
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		log.info("JwtLoginFilter : 로그인 요청 받음.");
		
		ObjectMapper om = new ObjectMapper();
		LoginReqDto loginReqDto = null;
		
		try {
			loginReqDto = om.readValue(request.getInputStream(), LoginReqDto.class);
			log.info("JwtLoginFilter : 로그인 유저 dto : " + loginReqDto);
		} catch (Exception e) {
			log.warn("JwtLoginFilter : 로그인 요청 dto 생성 중 실패");
			log.warn(e.getMessage());
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
		
		Date expireDate = new Date(System.currentTimeMillis() + 1000 * 10 * 60);
		
		String jwtToken = JWT.create()
							.withSubject("cgvToken")
							.withExpiresAt(expireDate)
							.withClaim("userId", principalDetails.getUser().getId())
							.sign(Algorithm.HMAC512("영화관"));
		
		response.setHeader("Authorization", "Bearer " + jwtToken);
		log.info("JwtLoginFilter : Token 생성 완료. 만료 시각 : " + expireDate);
		log.info("JwtLoginFilter : " + principalDetails.getUser().getUsername() + "의 token : " + jwtToken);
	}
}
