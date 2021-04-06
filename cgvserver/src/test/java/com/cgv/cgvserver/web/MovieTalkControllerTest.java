package com.cgv.cgvserver.web;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.web.dto.movietalk.MovieTalkSaveReqDto;
import com.fasterxml.jackson.databind.ObjectMapper;

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
public class MovieTalkControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void save테스트() throws Exception {
		MovieTalkSaveReqDto dto = MovieTalkSaveReqDto.builder()
									.movieId("K22196")
									.content("내용1")
									.imageSrc("src")
									.build();
		String content = new ObjectMapper().writeValueAsString(dto);
		
		ResultActions resultAction = mockMvc.perform(post("/movieTalk")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findAll테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movieTalk")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
}
