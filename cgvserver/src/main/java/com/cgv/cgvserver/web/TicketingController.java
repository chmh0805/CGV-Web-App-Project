package com.cgv.cgvserver.web;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.service.TicketingService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.ticketing.TicketingSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TicketingController {
	private final TicketingService ticketingService;
	
	@CrossOrigin
	@PostMapping("/ticketing")
	public CommonRespDto<?> save(@Valid @RequestBody TicketingSaveReqDto ticketingSaveReqDto, BindingResult bindingResult) {
		ticketingService.예매하기(ticketingSaveReqDto);
		System.out.println(ticketingSaveReqDto);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/ticketing/user/{userId}")
	public CommonRespDto<?> findByUserId(@PathVariable long userId) {
		return new CommonRespDto<>(1, ticketingService.유저예약정보찾기(userId));
	}
}
