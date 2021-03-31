package com.cgv.cgvserver.domain.ticketing;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.seat.Seat;
import com.cgv.cgvserver.domain.timetable.TimeTable;
import com.cgv.cgvserver.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Ticketing {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JsonBackReference
	@JoinColumn(name="userId")
	@ManyToOne
	private User user;
	
	private String tieketNum;
	
	private int personType;
	
	@JoinColumn(name = "seatId")
	@OneToOne
	private Seat seat;
	
	private int state; // 0: 미사용 1: 사용
	
	@JoinColumn(name="timeTableId")
	@ManyToOne
	private TimeTable timeTable;
	
	@CreationTimestamp
	private Timestamp createDate;
}
