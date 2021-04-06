package com.cgv.cgvserver.web;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

import javax.validation.Valid;

import org.springframework.core.io.InputStreamResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgv.cgvserver.domain.theater.Theater;
import com.cgv.cgvserver.service.TheaterService;
import com.cgv.cgvserver.web.dto.CommonRespDto;
import com.cgv.cgvserver.web.dto.theater.TheaterAreaRespDto;
import com.cgv.cgvserver.web.dto.theater.TheaterNameRespDto;
import com.cgv.cgvserver.web.dto.theater.TheaterSaveReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class TheaterController {
	private final TheaterService theaterService;
	
	@GetMapping("/theater")
	public CommonRespDto<?> findAll() {
		List<Theater> theaters = theaterService.극장전체조회();
		return new CommonRespDto<>(1, theaters);
	}
	
	@CrossOrigin
	@PostMapping("/theater")
	public CommonRespDto<?> save(@Valid TheaterSaveReqDto theaterSaveReqDto, BindingResult bindingResult) {	
		theaterService.극장등록(theaterSaveReqDto);
		return new CommonRespDto<>(1, null);
	}
	
	@GetMapping("/theater/image/{id}")
	public ResponseEntity<Resource> findImage(@PathVariable long id) throws IOException {
		Path path = theaterService.극장이미지찾기(id);
		Resource resource = new InputStreamResource(Files.newInputStream(path));

		String contentType = Files.probeContentType(path);
		HttpHeaders headers = new HttpHeaders();
		headers.add(HttpHeaders.CONTENT_TYPE, contentType);
		
		return new ResponseEntity<>(resource, headers, HttpStatus.OK);
	}
	
	@GetMapping("/theater/area")
	public CommonRespDto<?> findAllArea() {
		List<TheaterAreaRespDto> theaterAreaRespDtos = theaterService.극장구역전체조회();
		return new CommonRespDto<>(1, theaterAreaRespDtos);
	}
	
	@GetMapping("/theater/name/{area}")
	public CommonRespDto<?> findAllName(@PathVariable String area) {
		List<TheaterNameRespDto> theaterNameRespDtos = theaterService.극장이름전체조회(area);
		return new CommonRespDto<>(1, theaterNameRespDtos);
	}
	
	@GetMapping("/theater/name")
	public CommonRespDto<?> findAllName() {
		List<TheaterNameRespDto> theaterNameRespDtos = theaterService.극장이름전체조회();
		return new CommonRespDto<>(1, theaterNameRespDtos);
	}
	

	@GetMapping("/theater/timetable/date/{date}/theaterId/{theaterId}")
	public CommonRespDto<?> findByDateAndTheaterId(@PathVariable String date, @PathVariable long theaterId) {
		return new CommonRespDto<>(1, theaterService.극장별상영시간표조회(date, theaterId));
	}

}
