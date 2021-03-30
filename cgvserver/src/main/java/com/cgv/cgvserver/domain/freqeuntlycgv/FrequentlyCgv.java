package com.cgv.cgvserver.domain.freqeuntlycgv;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class FrequentlyCgv {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonBackReference
	@JoinColumn(name = "userId")
	@ManyToOne(cascade = CascadeType.REMOVE)
	private User user;
	
	@JoinColumn(name = "theaterId")
	@ManyToOne(cascade = CascadeType.REMOVE)
	private Theater theater;
}
