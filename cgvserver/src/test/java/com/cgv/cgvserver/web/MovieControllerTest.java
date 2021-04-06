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

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
public class MovieControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void findByMovieAll테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void trailerFindByMovieId테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie/K20604/trailer")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findByTrailerId테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie/trailer/1")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}

	
	@Test
	public void findBoxOfficeAll테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie/boxoffice/list")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findById테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie/K20604")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void save테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(post("/movie/boxoffice")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findBoxOfficeById테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/movie/boxoffice/K20604")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
}
