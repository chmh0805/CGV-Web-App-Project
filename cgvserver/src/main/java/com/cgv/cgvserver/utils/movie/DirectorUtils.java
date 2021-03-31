package com.cgv.cgvserver.utils.movie;

import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.director.Director;
import com.cgv.cgvserver.domain.movie.Movie;

public class DirectorUtils {
	public static List<Director> parsingToActorObject(String name, Movie movieEntity) {
		String temp[] = name.split("\\|");
		List<Director> list = new ArrayList<>();
		for (int i = 0; i < temp.length; i++) {
			Director director = Director.builder()
					.name(temp[i].trim())
					.movie(movieEntity)
					.build();
			list.add(director);
		}
		
		return list;
	}
}
