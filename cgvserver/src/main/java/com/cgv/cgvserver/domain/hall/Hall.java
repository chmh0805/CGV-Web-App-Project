package com.cgv.cgvserver.domain.hall;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.cgv.cgvserver.domain.seat.Seat;
import com.cgv.cgvserver.domain.theater.Theater;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Hall {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JoinColumn(name = "theaterId")
	@ManyToOne
	private Theater theater;
	
	private String name;
	
	@OneToMany(mappedBy = "hall", cascade = CascadeType.REMOVE)
	private List<Seat> seats;
}
