package com.cgv.cgvserver.domain.user;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.expectmovie.ExpectMovie;
import com.cgv.cgvserver.domain.freqeuntlycgv.FrequentlyCgv;
import com.cgv.cgvserver.domain.qna.Qna;
import com.cgv.cgvserver.domain.review.Review;
import com.cgv.cgvserver.domain.ticketing.Ticketing;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

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
	@JsonIgnore
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
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<ExpectMovie> expectMovies;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<FrequentlyCgv> frequentlyCgvs;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Qna> qnas;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
	private List<Review> reviews;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "user", cascade = CascadeType.DETACH)
	private List<Ticketing> ticketings;
}
