package com.cdac.epaathshaala.service;

import com.cdac.epaathshaala.entity.User;
import com.cdac.epaathshaala.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void saveUser(User user) {
        // You may want to perform additional validation or modifications
        //user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }
    
    
    
    //PRE REFERENCE
    @Override
	public User createUser(User user) {
    	//user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

    @Override
	public boolean checkEmail(String email) {
		
		return userRepository.existsByEmail(email);
	}

	@Override
	public User checkLogin(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}
}
