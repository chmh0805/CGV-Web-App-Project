package com.cgv.cgvserver.web;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.movietalk.MovieTalk;
import com.cgv.cgvserver.service.MovieTalkService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.movietalk.MovieTalkSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MovieTalkController {
	private final MovieTalkService movieTalkService;
	
	@PostMapping("/movieTalk")
	public CommonRespDto<?> save(@RequestBody MovieTalkSaveReqDto movieTalkSaveReqDto) {
		MovieTalk movietalk = movieTalkService.저장하기(movieTalkSaveReqDto);
		return new CommonRespDto<>(1, movietalk);
	}
	
	@GetMapping("/movieTalk")
	public CommonRespDto<?> findAll() {
		List<MovieTalk> movieTalks = movieTalkService.모두찾기();
		return new CommonRespDto<>(1, movieTalks);
	}
}


