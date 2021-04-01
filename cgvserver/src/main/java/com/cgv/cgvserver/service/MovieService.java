package com.cgv.cgvserver.service;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.qlrm.mapper.JpaResultMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cgv.cgvserver.api.MovieApiClient;
import com.cgv.cgvserver.domain.actor.Actor;
import com.cgv.cgvserver.domain.director.Director;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovie;
import com.cgv.cgvserver.domain.movie.BoxOfficeMovieRepository;
import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.movie.MovieRepository;
import com.cgv.cgvserver.domain.stillcut.StillCut;
import com.cgv.cgvserver.domain.trailer.Trailer;
import com.cgv.cgvserver.handler.exception.NotFoundMovieException;
import com.cgv.cgvserver.utils.movie.ActorUtils;
import com.cgv.cgvserver.utils.movie.BoxOfficeUtils;
import com.cgv.cgvserver.utils.movie.DirectorUtils;
import com.cgv.cgvserver.utils.movie.StillCutUtils;
import com.cgv.cgvserver.utils.movie.TrailerUtils;
import com.cgv.cgvserver.web.dto.movie.MovieBoxOfficeRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieDetailApiRespDto;
import com.cgv.cgvserver.web.dto.movie.MovieReqDto;
import com.cgv.cgvserver.web.dto.movie.TrailerRespDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MovieService {
	private final MovieApiClient movieApiClient;
	private final MovieRepository movieRepository;
	private final BoxOfficeMovieRepository boxOfficeMovieRepository;
	private final EntityManager entityManager;
	
	@Transactional(readOnly = true)
	public List<MovieDetailApiRespDto> findByBoxOfficeDate(String date) throws IOException {
		return movieApiClient.findByBoxOfficeDate(date);
	}
	@Transactional(readOnly = true)
	public List<String> 트레일러리스트(String movieId) {
		Query query = entityManager.createNativeQuery("SELECT thumbImageUrl FROM trailer WHERE movieId = ?")
			.setParameter(1, movieId);
		@SuppressWarnings("unchecked")
		List<String> thumbImageUrl = query.getResultList();
		return thumbImageUrl;
	}
	@Transactional(readOnly = true)
	public TrailerRespDto 트레일러(Long trailerId) {
		Query query = entityManager.createNativeQuery("SELECT trailerUrl FROM trailer WHERE id = ?")
				.setParameter(1, trailerId);
		JpaResultMapper result = new JpaResultMapper();
		TrailerRespDto trailerRespDto = result.uniqueResult(query, TrailerRespDto.class);
		return trailerRespDto;
	}
	
	@Transactional(readOnly = true)
	public List<String> 스틸컷리스트(String movieId) {
		Query query = entityManager.createNativeQuery("SELECT imageUrl FROM stillcut WHERE movieId = ?")
			.setParameter(1, movieId);
		@SuppressWarnings("unchecked")
		List<String> stillCutImageUrl = query.getResultList();
		return stillCutImageUrl;
	}
	
	@Transactional(readOnly = true)
	public List<MovieBoxOfficeRespDto> 박스오피스영화리스트() {
		StringBuffer sb = new StringBuffer();
		sb.append("SELECT rankNum, docId, posterImgSrc, title, releaseDate ");
		sb.append("FROM boxofficemovie AS bm inner join movie AS m ");
		sb.append("WHERE bm.movieId = m.docId order by rankNum ASC ");
		
		Query query = entityManager.createNativeQuery(sb.toString());
		
		JpaResultMapper result = new JpaResultMapper();
		List<MovieBoxOfficeRespDto> movieBoxOfficeRespDtos = result.list(query, MovieBoxOfficeRespDto.class);
		return movieBoxOfficeRespDtos;
	}
	@Transactional(readOnly = true)
	public Movie 영화상세보기(String movieId) {
		Movie movie = movieRepository.findById(movieId).orElseThrow(() -> {throw new NotFoundMovieException();});
		return movie;
	}
	@Transactional
	public void 저장하기(MovieReqDto movieReqDto) {
		Movie movie = movieReqDto.toEntity();
		
		Movie movieEntity = movieRepository.save(movie);
		
		List<Director> directors = DirectorUtils.parsingToActorObject(movieReqDto.getDirectors(), movieEntity);
		List<Actor> actors = ActorUtils.parsingToActorObject(movieReqDto.getActors(), movieEntity);
		List<Trailer> trailers = TrailerUtils.parsingToTrailerObject(movieReqDto.getTrailerUrls(), movieReqDto.getThumbImageUrls(), movieEntity);
		List<StillCut> stillCuts = StillCutUtils.parsingToActorObject(movieReqDto.getStillCutImgSrc(), movieEntity);
		
		for (int i = 0; i < directors.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO director (name, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM director WHERE name = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, directors.get(i).getName())
				.setParameter(2, directors.get(i).getMovie())
				.setParameter(3, directors.get(i).getName())
				.setParameter(4, directors.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < actors.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO actor (name, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM actor WHERE name = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, actors.get(i).getName())
				.setParameter(2, actors.get(i).getMovie())
				.setParameter(3, actors.get(i).getName())
				.setParameter(4, actors.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < trailers.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO trailer (trailerUrl, movieId, thumbImageUrl) ");
			sb.append("SELECT ?, ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM trailer WHERE trailerUrl = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, trailers.get(i).getTrailerUrl())
				.setParameter(2, trailers.get(i).getMovie())
				.setParameter(3, trailers.get(i).getThumbImageUrl())
				.setParameter(4, trailers.get(i).getTrailerUrl())
				.setParameter(5, trailers.get(i).getMovie())
				.executeUpdate();
		}
		
		for (int i = 0; i < stillCuts.size(); i++) {
			StringBuffer sb = new StringBuffer();
			sb.append("INSERT INTO stillcut (imageUrl, movieId) ");
			sb.append("SELECT ?, ? FROM dual ");
			sb.append("WHERE NOT EXISTS(SELECT id FROM stillcut WHERE imageUrl = ? AND movieId = ?) ");
			
			entityManager.createNativeQuery(sb.toString())
				.setParameter(1, stillCuts.get(i).getImageUrl())
				.setParameter(2, stillCuts.get(i).getMovie())
				.setParameter(3, stillCuts.get(i).getImageUrl())
				.setParameter(4, stillCuts.get(i).getMovie())
				.executeUpdate();
		}
		
		BoxOfficeMovie boxOfficeMovie = BoxOfficeUtils.boxOfficeMovieObject(movieReqDto.getRank(), movieEntity);
		boxOfficeMovieRepository.save(boxOfficeMovie);
	}
}
