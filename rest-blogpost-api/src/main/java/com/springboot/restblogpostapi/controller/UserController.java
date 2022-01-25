package com.springboot.restblogpostapi.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.User;
import com.springboot.restblogpostapi.security.JwtUtil;
import com.springboot.restblogpostapi.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	@Autowired
	private JwtUtil jwtUtil;
	
	@GetMapping("/user")
	public User getUserDetails(HttpServletRequest request) {
		
		final String authorizationHeader = request.getHeader("Authorization");

        String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }
        
        User user= userService.getUserByUserName(username);

		return user;
	}
	
	@PostMapping("/register")
	public String registerUser(@RequestBody User theuser) {
		
		System.out.println("Register Object : "+theuser.getUserName());
		System.out.println("Register Object : "+theuser.getEmail());
		System.out.println("Register Object : "+theuser.getPassword());
		System.out.println("Register Object : "+theuser.getRole());
		System.out.println("Register Object : "+theuser.getActive());
		
		userService.save(theuser);
		
		
		return "Successfully Created User !! ";
	}
	

}
