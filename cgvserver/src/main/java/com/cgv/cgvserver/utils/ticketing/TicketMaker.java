package com.cgv.cgvserver.utils.ticketing;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TicketMaker {
	public static String makeKey(Long userId, Long timeTableId, Long seatId) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		String key = "";

		String cgvEncoded = encoder.encode("CGV");
		key += cgvEncoded.substring(cgvEncoded.length() - 4) + "-";
		 
		String userIdEncoded = encoder.encode(userId.toString());
		key += userIdEncoded.substring(userIdEncoded.length() - 4) + "-";
		
		String timeTableIdEncoded = encoder.encode(timeTableId.toString());
		key += timeTableIdEncoded.substring(timeTableIdEncoded.length() - 4) + "-";
		
		String seatIdEncoded = encoder.encode(seatId.toString());
		key += seatIdEncoded.substring(seatIdEncoded.length() - 4);
		
		return key;
	}
}
