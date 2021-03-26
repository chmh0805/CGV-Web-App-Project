package com.cgv.cgvserver.domain.theater;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.cgv.cgvserver.domain.hall.Hall;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Theater { //CGV서면점
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	
	private String location;
	
	private String phone;
	
	@OneToMany(mappedBy = "theater", cascade = CascadeType.REMOVE)
	private List<Hall> halls; // B홀 8층 A홀 7층
}
