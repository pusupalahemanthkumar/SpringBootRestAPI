package com.springboot.restblogpostapi.service;

import com.springboot.restblogpostapi.entity.User;

public interface UserService {
	
	public User getUserByUserName(String userName);
	
	public User getUserByEmailId(String email);
	
	public User getUserById(int Id);
	
	public void save(User theUser);

}
