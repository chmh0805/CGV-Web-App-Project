package com.cgv.cgvserver.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.domain.freqeuntlycgv.FrequentlyCgv;
import com.cgv.cgvserver.domain.freqeuntlycgv.FrequentlyCgvRepository;
import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.domain.theater.TheaterRepository;
import com.cgv.cgvserver.domain.user.User;
import com.cgv.cgvserver.domain.user.UserRepository;
import com.cgv.cgvserver.handler.exception.NotFoundTheaterException;
import com.cgv.cgvserver.handler.exception.NotFoundUserException;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class FrequentlyCgvService {
	private final FrequentlyCgvRepository frequentlyCgvRepository;
	private final UserRepository userRepository;
	private final TheaterRepository theaterRepository;
	
	@Transactional
	public void 등록하기(long theaterId, long userId) {
		User userEntity = userRepository.findById(userId)
								.orElseThrow(() -> {throw new NotFoundUserException();});
		
		Theater theaterEntity = theaterRepository.findById(theaterId)
									.orElseThrow(() -> {throw new NotFoundTheaterException();});
		
		FrequentlyCgv frequentlyCgv = FrequentlyCgv.builder()
										.user(userEntity)
										.theater(theaterEntity)
										.build();
		frequentlyCgvRepository.save(frequentlyCgv);
	}
	
	@Transactional(readOnly = true)
	public List<FrequentlyCgv> 조회하기(long userId) {
		return frequentlyCgvRepository.findByUserId(userId);
	}
	
	@Transactional
	public void 삭제하기(long theaterId, long userId) {
		frequentlyCgvRepository.deleteByIdAndUserId(theaterId, userId);
	}
}
