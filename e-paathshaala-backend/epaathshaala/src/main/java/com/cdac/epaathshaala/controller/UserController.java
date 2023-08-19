package com.cdac.epaathshaala.controller;

import com.cdac.epaathshaala.entity.User;
import com.cdac.epaathshaala.service.UserService;


//import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

//import jakarta.servlet.http.HttpSession;
//import jakarta.transaction.Transactional;

import javax.servlet.http.HttpSession;
import org.springframework.transaction.annotation.Transactional;
import javax.servlet.http.HttpServletRequest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cdac.epaathshaala.repository.UserRepository; 

@CrossOrigin(origins="http://localhost:3000")
@Transactional
@RestController
@RequestMapping("/api/v1/")
public class UserController {

    @Autowired
    private UserService userService;
    
	@Autowired
	private UserRepository userRepository;

//    @PostMapping(value = "/signup")
//    public ResponseEntity<?> signUp(@RequestBody User user) {
//        if (userService.findByUsername(user.getUsername()) != null) {
//            return ResponseEntity.badRequest().body("Username already exists.");
//        }
//        userService.saveUser(user);
//        return ResponseEntity.ok("User registered successfully.");
//    }
    
    @PostMapping(value = "/signup")
	public User createUser(@RequestBody User user, HttpSession session) {
//		System.out.println(user.toString());
		boolean flag= userService.checkEmail(user.getEmail());
		
		if(flag) {
			session.setAttribute("Email Already Exists", null);
			return null;
		}
		else {
		return userService.createUser(user);
		}
		
		}
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user, HttpServletRequest request) {
        String username = user.getUsername(); // Fetch the username from the request
        String password = user.getPassword();
        List<User> userList = userRepository.findByUsername(username);

        for (User dbUser : userList) {
            if (dbUser.getPassword().equals(password)) {
                dbUser.setIsloggedin(true);
                userRepository.save(dbUser);

                // Store user data in session
                HttpSession session = request.getSession();
                session.setAttribute("userId", dbUser.getUser_id());
                session.setAttribute("userEmail", dbUser.getEmail());
                session.setAttribute("userPassword", dbUser.getPassword());
                String userRole = "student"; // Default role if none matches
                if (dbUser.getRole().equals("STUDENT")) {
                    userRole = "student";
                } else if (dbUser.getRole().equals("FACULTY")) {
                    userRole = "faculty";
                } else if (dbUser.getRole().equals("ADMIN")) {
                    userRole = "admin";
                }
                session.setAttribute("userRole", userRole);

                return ResponseEntity.status(HttpStatus.OK).body(dbUser);
            }
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }

    
}
