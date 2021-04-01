package com.cgv.cgvserver.utils.theater;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.cgv.cgvserver.domain.hall.Hall;
import com.cgv.cgvserver.domain.seat.Seat;
import com.cgv.cgvserver.domain.theater.Theater;

public class InitTheater {
	
	public static List<Hall> makeHalls(Theater theaterEntity) {
		List<Hall> halls = new ArrayList<>();
		
		for (int i = 1; i < 6; i++) {
			Hall hall = Hall.builder()
							.theater(theaterEntity)
							.name(i + "관")
							.build();
			halls.add(hall);
		}
		return halls;
	}
	
	public static List<Seat> makeSeats(Hall hallEntity) {
		List<Seat> seats = new ArrayList<>();
		List<String> seatNames = Arrays.asList("A", "B", "C", "D");
		for (String seatName : seatNames) {
			for (int j = 1; j < 6; j++) {
				Seat seat = Seat.builder()
								.name(seatName + j)
								.hall(hallEntity)
								.build();
				seats.add(seat);
			}
		}
		return seats;
	}
}
