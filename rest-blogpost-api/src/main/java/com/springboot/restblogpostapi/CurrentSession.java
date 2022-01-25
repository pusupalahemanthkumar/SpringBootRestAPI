package com.springboot.restblogpostapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.springboot.restblogpostapi.entity.User;
import com.springboot.restblogpostapi.security.JwtUtil;
import com.springboot.restblogpostapi.service.UserService;


@Component
public class CurrentSession {
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserService userService;
	
	public int getCurrentUserId(String authorizationHeader) {
		
		String username = null;
        String jwt = null;

        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            jwt = authorizationHeader.substring(7);
            username = jwtUtil.extractUsername(jwt);
        }
        
        User user= userService.getUserByUserName(username);
		
		return user.getId();
		
	}

}
