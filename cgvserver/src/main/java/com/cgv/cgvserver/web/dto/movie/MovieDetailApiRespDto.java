package com.cgv.cgvserver.web.dto.movie;

import java.util.List;

import lombok.Data;

@Data
public class MovieDetailApiRespDto {
	private long id;
	private String docId;
	private String title;
	private String titleEng;
	private String prodYear;
	private String nation;
	private Directors directors;
	private String directorNames;
	
	private Actors actors;
	private String actorNames;
	private String repRlsDate;
	private Plots plots; // 시놉시스
	private String plot;
	
	private String runtime;
	private String rating;
	private String genre;
	
	private String posters; // 이미지 여러개 ('|'기준으로 split 필요)
	
	private String stlls; // 이미지 여러개 ('|'기준으로 split 필요)
	
	private Vods vods;
	private String vodUrl;
	private String vodClass;
	private String thumImageUrl;
	private String company;
	private int rank;

	public String getTitle() {
		String title = this.title.replaceAll("!HS", "").trim().replaceAll("!HE", "").replaceAll(" +", " ").trim();
		return title;
	}
	
	@Data
	public static class Directors {
		private List<Director> director;

		@Data
		public static class Director {
			private String directorNm;
			private String directorId;
		}
	}

	@Data
	public static class Actors {
		private List<Actor> actor;

		@Data
		public static class Actor {
			private String actorNm;
		}

	}

	@Data
	public static class Plots {
		private List<Plot> plot;

		@Data
		public static class Plot {
			private String plotText;
		}
	}

	@Data
	public static class Vods {
		private List<Vod> vod;

		@Data
		public static class Vod {
			private String vodClass;
			private String vodUrl;

		}

	}
}
