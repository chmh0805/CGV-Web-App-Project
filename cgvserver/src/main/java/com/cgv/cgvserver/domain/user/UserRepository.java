package com.cgv.cgvserver.domain.user;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);
	Optional<User> findByNameAndEmail(String name, String email);
	Optional<User> findByUsernameAndPhone(String username, String phone);
}
