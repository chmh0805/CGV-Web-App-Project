package com.cgv.cgvserver.domain.theater;

import java.sql.Timestamp;

import javax.persistence.OneToMany;

import com.cgv.cgvserver.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
//@Entity
public class Theater {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String name;
	
	private String location;
	
	private String phone;
	
//	@OneToMany(mappedBy = "theater")
//	private Hall hall;
}
