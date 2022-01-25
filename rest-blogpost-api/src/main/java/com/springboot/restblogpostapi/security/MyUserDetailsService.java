package com.springboot.restblogpostapi.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.springboot.restblogpostapi.entity.User;
import com.springboot.restblogpostapi.service.UserService;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService {
	
	@Autowired
	private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {
  
    	User user = userService.getUserByUserName(userName);
    	

    	if(user==null) {
    		throw new UsernameNotFoundException("Not Found : "+ userName);
    	}
    	
    	return new MyUserDetails(user);
    	
       
    }
}