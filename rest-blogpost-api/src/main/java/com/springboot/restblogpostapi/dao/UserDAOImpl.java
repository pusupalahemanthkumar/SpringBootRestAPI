package com.springboot.restblogpostapi.dao;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.User;

@Repository
public class UserDAOImpl implements UserDAO {
	
private EntityManager entityManager;
	
	// Constructor dependency injection
	@Autowired
	public UserDAOImpl(EntityManager theEntityManager) {
		entityManager=theEntityManager;
	}

	@Override
	public User getUserByUserName(String userName) {

		Session currentSession = entityManager.unwrap(Session.class);
		User user=null;
		
		try {
			
			Query query=currentSession.createQuery("from User where user_name=:username");
			query.setParameter("username", userName);
			
		    user=(User)query.uniqueResult();
		   
			
		}catch(Exception e ) {
			System.out.println("Something WENT WRONG !!")	;
		}
		
		return user;
	}

	@Override
	public User getUserByEmailId(String email) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query query=currentSession.createQuery("from User where email=:email");
		query.setParameter("email",email);
		
		User user=(User)query.uniqueResult();
		
		return user;
		
	}

	@Override
	public User getUserById(int theId) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		User user = currentSession.get(User.class,theId);
		
		return user;
	}

	@Override
	public void save(User theUser) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		System.out.println("DAO1 :"+ theUser.getUserName());
		
		currentSession.saveOrUpdate(theUser);
		System.out.println("DAO 2:"+ theUser.getUserName());
		
	}
	
	
	

}
