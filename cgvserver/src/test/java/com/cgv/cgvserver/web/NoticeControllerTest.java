package com.cgv.cgvserver.web;

import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.web.dto.notice.NoticeSaveReqDto;
import com.fasterxml.jackson.databind.ObjectMapper;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
public class NoticeControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void save테스트() throws Exception {
		NoticeSaveReqDto dto = NoticeSaveReqDto.builder()
									.sort(0)
									.title("제목1")
									.content("내용1")
									.build();
		String content = new ObjectMapper().writeValueAsString(dto);
		
		ResultActions resultAction = mockMvc.perform(post("/notice")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findAllNotice테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/support/news")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findAllDescLimit테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/notice/limit/3")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findAll테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/notice")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findByKeyword테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/notice/search/검색어")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findById테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/notice/1")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect(jsonPath("$.statusCode").value(1))
			.andDo(MockMvcResultHandlers.print());
	}
}
