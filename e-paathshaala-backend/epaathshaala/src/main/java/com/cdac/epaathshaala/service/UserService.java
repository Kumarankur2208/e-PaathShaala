package com.cdac.epaathshaala.service;

import java.util.List;

import com.cdac.epaathshaala.entity.User;

public interface UserService {
	List<User> findByUsername(String username);
    void saveUser(User user);
    
    public User createUser(User user);
	 
	 public boolean checkEmail(String email);
	 
	// public User getUserById(Long id);
	 
	 public User checkLogin(String username,String password);
}
