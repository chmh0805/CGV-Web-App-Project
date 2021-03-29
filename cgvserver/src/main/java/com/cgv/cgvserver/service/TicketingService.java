package com.cgv.cgvserver.service;

import org.springframework.stereotype.Service;

import com.cgv.cgvserver.domain.ticketing.TicketingRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class TicketingService {
	private final TicketingRepository ticketingRepository;
	
	
}
