package com.springboot.restblogpostapi.dao;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.Comment;
import com.springboot.restblogpostapi.entity.User;

@Repository
public class CommentDAOImpl implements CommentDAO {
	
private EntityManager entityManager;
	
	
	// Constructor dependency injection
	@Autowired
	public CommentDAOImpl(EntityManager theEntityManager) {
		entityManager=theEntityManager;
	}

	@Override
	public void save(Comment theComment, int userId,int postId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		User user =currentSession.get(User.class,userId);
		
		BlogPost blogPost =currentSession.get(BlogPost.class,postId);
		
		theComment.setAuthor(user);
		theComment.setBlogpost(blogPost);
		
		currentSession.saveOrUpdate(theComment);

	}

}
