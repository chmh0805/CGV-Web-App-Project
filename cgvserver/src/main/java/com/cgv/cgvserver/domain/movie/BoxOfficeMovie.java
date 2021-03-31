package com.cgv.cgvserver.domain.movie;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
public class BoxOfficeMovie {
	@Id
	private int rankNum;
	@JsonIgnore
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="movieId")
	private Movie movie;
}
