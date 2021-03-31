package com.cgv.cgvserver.utils.movie;

import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.stillcut.StillCut;

public class StillCutUtils {
	public static List<StillCut> parsingToActorObject(String imageUrl, Movie movieEntity) {
		List<StillCut> list = new ArrayList<>();
		if(imageUrl != null && imageUrl != "") {
			String temp[] = imageUrl.split("\\|");
			list = new ArrayList<>();
			for (int i = 0; i < temp.length; i++) {
				StillCut stillCut = StillCut.builder()
						.imageUrl(temp[i].trim())
						.movie(movieEntity)
						.build();
				list.add(stillCut);
			}
			
		}
		return list;
	}
}
