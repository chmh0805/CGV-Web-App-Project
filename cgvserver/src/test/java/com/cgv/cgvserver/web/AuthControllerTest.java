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

import com.cgv.cgvserver.web.dto.auth.JoinReqDto;
import com.fasterxml.jackson.databind.ObjectMapper;

@Transactional
@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = WebEnvironment.MOCK)
public class AuthControllerTest {

	@Autowired
	private MockMvc mockMvc;
	
	@Test
	public void join테스트() throws Exception {
		JoinReqDto joinReqDto = JoinReqDto.builder()
						.username("test1")
						.password("test1")
						.name("테스트")
						.nickname("테스트")
						.email("test@test.com")
						.phone("010-2222-2425")
						.build();
		String content = new ObjectMapper().writeValueAsString(joinReqDto);
		
		ResultActions resultAction = mockMvc.perform(post("/auth/join")
				.contentType(MediaType.APPLICATION_JSON_UTF8)
				.content(content)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect((jsonPath("$.statusCode").value(1)))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void role테스트() throws Exception {
		ResultActions resultAction = mockMvc.perform(get("/auth/role/1")
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect((jsonPath("$.statusCode").value(1)))
			.andDo(MockMvcResultHandlers.print());
	}
	
	@Test
	public void findByUsername테스트() throws Exception {
		String username = "hyuk";
		
		ResultActions resultAction = mockMvc.perform(post("/auth/username")
				.contentType(MediaType.TEXT_PLAIN)
				.content(username)
				.accept(MediaType.APPLICATION_JSON_UTF8));
		
		resultAction
			.andExpect((jsonPath("$.statusCode").value(1)))
			.andDo(MockMvcResultHandlers.print());
	}
}
