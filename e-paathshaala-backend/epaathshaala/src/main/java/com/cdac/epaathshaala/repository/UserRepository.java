package com.cdac.epaathshaala.repository;

import com.cdac.epaathshaala.entity.User;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUsername(String username);
    
    List<User> findByEmail(String email);
    public boolean existsByEmail(String email);
}
