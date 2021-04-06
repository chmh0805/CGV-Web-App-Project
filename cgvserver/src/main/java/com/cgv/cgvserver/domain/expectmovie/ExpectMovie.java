package com.cgv.cgvserver.domain.expectmovie;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.CreationTimestamp;

import com.cgv.cgvserver.domain.movie.Movie;
import com.cgv.cgvserver.domain.user.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(
		name="expectmovie",
		uniqueConstraints={
			@UniqueConstraint(
				name = "expectmovie_uk",
				columnNames={"movieId","userId"}
			)
		}
	)
public class ExpectMovie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@JoinColumn(name = "movieId")
	@ManyToOne
	private Movie movie;
	
	@JsonBackReference
	@JoinColumn(name = "userId")
	@ManyToOne
	private User user;
	
	@CreationTimestamp
	private Timestamp createDate; 
}
