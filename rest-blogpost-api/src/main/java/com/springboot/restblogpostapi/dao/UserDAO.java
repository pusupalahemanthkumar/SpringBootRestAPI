package com.springboot.restblogpostapi.dao;

import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.User;

public interface UserDAO {
	
	public User getUserByUserName(String userName);
	
	public User getUserByEmailId(String email);
	
	public User getUserById(int Id);
	
	public void save(User theUser);

}
