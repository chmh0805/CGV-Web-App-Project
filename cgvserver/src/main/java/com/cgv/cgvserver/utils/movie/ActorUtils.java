package com.cgv.cgvserver.utils.movie;

import java.util.ArrayList;
import java.util.List;

import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.movie.Movie;

public class ActorUtils {
	public static List<Actor> parsingToActorObject(String name, Movie movieEntity) {
		String temp[] = name.split("\\|");
		List<Actor> list = new ArrayList<>();
		for (int i = 0; i < temp.length; i++) {
			Actor actor = Actor.builder()
					.name(temp[i].trim())
					.movie(movieEntity)
					.build();
			list.add(actor);
		}
		
		return list;
	}
}
