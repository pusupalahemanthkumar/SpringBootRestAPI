package com.springboot.restblogpostapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.restblogpostapi.dao.UserDAO;
import com.springboot.restblogpostapi.entity.User;

@Service
public class UserServiceImpl implements UserService {
	
	private UserDAO userDAO;
	
	@Autowired
	public UserServiceImpl(UserDAO theUserDAO) {
		userDAO=theUserDAO;
	}

	@Override
	@Transactional
	public User getUserByUserName(String userName) {
		
		return userDAO.getUserByUserName(userName);
	}

	@Override
	@Transactional
	public User getUserByEmailId(String email) {
		
		return userDAO.getUserByEmailId(email);
	}

	@Override
	@Transactional
	public User getUserById(int theId) {
		
		return userDAO.getUserById( theId);
	}

	@Override
	@Transactional
	public void save(User theUser) {
		
	   userDAO.save(theUser);
		
	}
	
	
	

}
