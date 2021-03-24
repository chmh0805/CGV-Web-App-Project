package com.cgv.cgvserver.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByUsername(String username);
	User findByNameAndEmail(String name, String email);
	User findByUsernameAndPhone(String username, String phone);
}
