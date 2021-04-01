package com.cgv.cgvserver.api;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeApiRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeApiRespDto.BoxOfficeResult.DailyBoxOfficeList;
import com.cgv.cgvserver.web.dto.movie.MovieDetailApiRespDto;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Service
public class MovieApiClient {
	// KMDB 시크릿키
		private final String serviceKey = "0GD5Q0K22YX0E289DF25";
		// 영화진흥위원회 키
		private final String CLIENT_KEY = "5c2bbd87035c6261362a05d476565551";
		private RestTemplate restTemplate = new RestTemplate();
		// 영화진흥위원회 박스오피스 url
		private final String OpenMovieUrl_getMovies = "https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?"
				+ "key=" + CLIENT_KEY + "&targetDt={date}";
		
		public List<MovieDetailApiRespDto> findByBoxOfficeDate(String date) throws IOException {
			HttpHeaders headers = new HttpHeaders();
			final HttpEntity<?> entity = new HttpEntity<>(headers);
			
			MovieBoxOfficeApiRespDto movieBoxOfficeApiRespDto = restTemplate
					.exchange(OpenMovieUrl_getMovies, HttpMethod.GET, entity, MovieBoxOfficeApiRespDto.class, date).getBody();
			List<DailyBoxOfficeList> dailyBoxOfficeLists = movieBoxOfficeApiRespDto.getBoxOfficeResult()
					.getDailyBoxOfficeList();

			List<MovieDetailApiRespDto> movieDetailApiRespDtos = new ArrayList<>();
			ObjectMapper objectMapper = new ObjectMapper();
			
			List<String> movieJsonArray = new ArrayList<>();
			List<String> movieJsonParseArray = new ArrayList<>();
			
			
			int i = 0;
			for (DailyBoxOfficeList dailyBoxOffice : dailyBoxOfficeLists) {
				
				StringBuilder urlBuilder = new StringBuilder(
						"http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y");
				urlBuilder.append("&" + URLEncoder.encode("ServiceKey", "UTF-8") + "=" + serviceKey);
				urlBuilder.append("&" + URLEncoder.encode("title", "UTF-8") + "="
						+ URLEncoder.encode(dailyBoxOffice.getMovieNm(), "UTF-8")); // 영화제목
				urlBuilder.append("&" + URLEncoder.encode("releaseDts", "UTF-8") + "="
						+ URLEncoder.encode(dailyBoxOffice.getOpenDt(), "UTF-8")); // 개봉날짜 -> 영화제목이 중복되는 영화가 있어서 개봉날짜와 함께
																					// 찾음.

				URL url = new URL(urlBuilder.toString());

				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("GET");
				conn.setRequestProperty("Content-type", "application/json");
				BufferedReader rd;

				if (conn.getResponseCode() >= 200 && conn.getResponseCode() <= 300) {
					rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));
				} else {
					rd = new BufferedReader(new InputStreamReader(conn.getErrorStream()));
				}

				String line;
				StringBuilder sb = new StringBuilder();
				while ((line = rd.readLine()) != null) {
					sb.append(line);

				}

				movieJsonArray.add(sb.toString());

				JsonObject jsonObject = (JsonObject) JsonParser.parseString(movieJsonArray.get(i));  
				JsonArray jsonArray = (JsonArray) jsonObject.get("Data");
				
				jsonObject = (JsonObject) jsonArray.get(0);
				System.out.println(jsonObject);
				
				if(!jsonObject.get("Count").toString().equals("0")) {
					
					jsonArray = (JsonArray) jsonObject.get("Result");
					movieJsonParseArray.add(jsonArray.get(0).toString());
				} else {
					i++;
					if(i>=jsonObject.size()) { break; }
					else continue;
					
				}
				
				rd.close();
				conn.disconnect();
				
				MovieDetailApiRespDto movieDetailApiRespDto = new MovieDetailApiRespDto();
				objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false); // true면 api 문서에 있는 모든 응답을																					// default:true
				objectMapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true); // 대소문자 구분 X
				movieDetailApiRespDto = objectMapper.readValue(movieJsonParseArray.get(i), MovieDetailApiRespDto.class);
				movieDetailApiRespDtos.add(movieDetailApiRespDto);
				movieDetailApiRespDtos.get(i).setId(i);
				
				String actorNm = "";
				String directorNm = "";
				
				for (int j = 0; j < movieDetailApiRespDtos.get(i).getActors().getActor().size(); j++) {		
					actorNm += movieDetailApiRespDtos.get(i).getActors().getActor().get(j).getActorNm()+"|";				
				}
				for (int j=0; j< movieDetailApiRespDtos.get(i).getDirectors().getDirector().size(); j++) {
					directorNm += movieDetailApiRespDtos.get(i).getDirectors().getDirector().get(j).getDirectorNm()+"|";
				}
				
				movieDetailApiRespDtos.get(i).setActorNames(actorNm);
				movieDetailApiRespDtos.get(i).setDirectorNames(directorNm);
				movieDetailApiRespDtos.get(i).setPlot(movieDetailApiRespDtos.get(i).getPlots().getPlot().get(0).getPlotText());
				
				String vodUrl = movieDetailApiRespDtos.get(i).getVods().getVod().get(0).getVodUrl();
				
				if (!vodUrl.isEmpty()) {
					Connection jsoupConn = Jsoup.connect(vodUrl.toString());
					Document doc = jsoupConn.get();
					String vodUrls = "";
					String vodClass="";
					String thumbImageUrls="";
					int j = 0;
					for (Element elements : doc.select(".pt0")) {
						String href = elements.select("a").attr("href");
						String thumbImageUrl = elements.select("a .timeline-box .mImg1 span").attr("style").replace("background-image: url('", "").replace("')", "");
						href = href.replace("javascript:fcnPlay", "").replace("('", "").replace("')", "").replace(";", "");
						href = "https://www.kmdb.or.kr/trailer/trailerPlayPop?pFileNm=" + href;
						if (movieDetailApiRespDtos.get(i).getVods().getVod().size() <= j) {
							j--;
						}
						
						vodUrls += href.toString()+"|";
						vodClass += movieDetailApiRespDtos.get(i).getVods().getVod().get(j).getVodClass()+"|";
						movieDetailApiRespDtos.get(i).getVods().getVod().get(j)
								.setVodUrl(href.toString());
						thumbImageUrls += thumbImageUrl+"|";
						
						j++;
					}
					movieDetailApiRespDtos.get(i).setVodUrl(vodUrls);
					movieDetailApiRespDtos.get(i).setVodClass(vodClass);
					movieDetailApiRespDtos.get(i).setThumImageUrl(thumbImageUrls);

				}
				movieDetailApiRespDtos.get(i).setRank(Integer.parseInt(dailyBoxOffice.getRank()));
				String[] spPosters = movieDetailApiRespDtos.get(i).getPosters().split("\\|");
				movieDetailApiRespDtos.get(i).setPosters(spPosters[0]);
				
				i++;
			
			}
			return movieDetailApiRespDtos;
		}
}
