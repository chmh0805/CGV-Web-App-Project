package com.cgv.cgvserver.web.dto.movie;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class MovieBoxOfficeApiRespDto {
	private BoxOfficeResult boxOfficeResult;

	@Data
	public static class BoxOfficeResult {
		private String boxofficeType;
		private String showRange;		
		private List<DailyBoxOfficeList> dailyBoxOfficeList;
		
		@Data
		public static class DailyBoxOfficeList {
			private String rank;
			private String movieNm;
			private String openDt;
			
			// 박스오피스 api의 경우 개봉 날짜 2021-03-24 형태인 반면에 KMDB api의 경우 20210324 형태 임. 그래서 맞춰주는 거
			public String getOpenDt() {
				SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
				String openDt = null;
				try {
					Date date = simpleDateFormat.parse(this.openDt);
					SimpleDateFormat dateFormater = new SimpleDateFormat("yyyyMMdd");
					openDt = dateFormater.format(date);
				} catch (ParseException e) {
					e.printStackTrace();
				}
				return openDt;
			}
			

			
		}
	}
}
