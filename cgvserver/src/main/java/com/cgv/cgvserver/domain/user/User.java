package com.cgv.cgvserver.domain.user;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // 번호
	@Column(nullable = false, unique = true)
	private String username; // 아이디
	@Column(nullable = false)
	private String password; // 비밀번호
	@Column(nullable = false)
	private String name; // 이름(실명)
	@Column(nullable = false, unique = true)
	private String nickname; // 닉네임
	@Column(nullable = false, unique = true)
	private String email; // 이메일
	@Column(nullable = false, unique = true)
	private String phone; // 휴대폰번호
	
	private String role; // USER, ADMIN
	
	private Boolean agreeAd; // 알림 수신 동의 여부
	
	private Timestamp agreeDate; // 알림 수신 동의일
	
	private String profileImage; // 프로필 이미지 url
	
	@CreationTimestamp
	private Timestamp createDate; // 생성일자
}
