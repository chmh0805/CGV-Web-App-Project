package com.cgv.cgvserver.config.auth;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;

public class JwtVerifyFilter extends BasicAuthenticationFilter {

	private final AuthenticationManager authenticationManager;
	private final UserRepository userRepository;
	
	public JwtVerifyFilter(AuthenticationManager authenticationManager, UserRepository userRepository) {
		super(authenticationManager);
		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
	}
	
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		String header = request.getHeader("Authorization");
		System.out.println("header : " + header);
		
		if (header == null || !(header.startsWith("Bearer"))) {
			chain.doFilter(request, response);
			return;
		}
		
		String token = request.getHeader("Authorization").replace("Bearer ", "");
		
		// 검증 1 (Header + Payload + Secret을 HMAC512로 해쉬한 값과 Signature 값이 같은 지)
		// 검증 2 (만료시간 확인)
		DecodedJWT dJwt = JWT.require(Algorithm.HMAC512("영화관")).build().verify(token);
		long userId = dJwt.getClaim("userId").asLong();
		System.out.println("userId : " + userId);
		
		try {
			User userEntity = userRepository.findById(userId)
						.orElseThrow(NotFoundUserException::new);
			System.out.println("userEntity : " + userEntity);
			
			PrincipalDetails principalDetails = new PrincipalDetails(userEntity);
			Authentication authentication =
						new UsernamePasswordAuthenticationToken(principalDetails.getUsername(), principalDetails.getPassword(), principalDetails.getAuthorities());
			SecurityContextHolder.getContext().setAuthentication(authentication);
			
			chain.doFilter(request, response);
		} catch (NotFoundUserException e) {
			e.printStackTrace();
		}

	}
	
	
}
