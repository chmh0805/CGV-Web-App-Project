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
import org.springframework.http.MediaType;
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
	
	// 진행중
//	@GetMapping("/theater/image/{id}")
//	public ResponseEntity<Resource> findImage(@PathVariable long id) throws IOException {
//		Path path = theaterService.극장이미지찾기(id);
//		Resource resource = new InputStreamResource(Files.newInputStream(path));
//
//		String contentType = Files.probeContentType(path);
//		HttpHeaders headers = new HttpHeaders();
//		headers.add(HttpHeaders.CONTENT_TYPE, contentType);
//		
//		return new ResponseEntity<>(resource, headers, HttpStatus.OK);
//	}
}
