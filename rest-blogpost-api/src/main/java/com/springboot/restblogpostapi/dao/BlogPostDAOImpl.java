package com.springboot.restblogpostapi.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.springboot.restblogpostapi.controller.RequestBlogPostUpdate;
import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.User;

@Repository
public class BlogPostDAOImpl implements BlogPostDAO {
	
	
	private EntityManager entityManager;
	
	
	// Constructor dependency injection
	@Autowired
	public BlogPostDAOImpl(EntityManager theEntityManager) {
		entityManager=theEntityManager;
	}

	@Override
	public List<BlogPost> findAll() {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query<BlogPost> theQuery =
				currentSession.createQuery("from BlogPost",BlogPost.class);
		
		List<BlogPost> blogPost =theQuery.getResultList();
		
		return blogPost;
	}

	@Override
	public BlogPost findById(int theId) {
		
		System.out.println(theId);
		Session currentSession = entityManager.unwrap(Session.class);
		
		BlogPost theBlogPost = currentSession.get(BlogPost.class,theId);
		System.out.println(theBlogPost);
		
		return theBlogPost;
	}

	@Override
	public void save(BlogPost thePost,int userId) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		User user =currentSession.get(User.class,userId);
		
		thePost.setAuthor(user);
		
		currentSession.saveOrUpdate(thePost);

	}
	

	@Override
	public void updateById(RequestBlogPostUpdate theBlogPostUpdate, int userId) {
		
		Session currentSession = entityManager.unwrap(Session.class);
		
		BlogPost blogPost =currentSession.get(BlogPost.class,theBlogPostUpdate.getId());
		
		blogPost.setTitle(theBlogPostUpdate.getTitle());
		blogPost.setDescription(theBlogPostUpdate.getDescription());
		blogPost.setLikesCount(theBlogPostUpdate.getLikesCount());
		blogPost.setDate(theBlogPostUpdate.getDate());
		
		currentSession.saveOrUpdate(blogPost);
		
	}

	@Override
	public void deleteById(int theId) {
		Session currentSession = entityManager.unwrap(Session.class);
		
		Query theQuery =currentSession.createQuery(
				"delete from BlogPost where id=:postId");
		
		theQuery.setParameter("postId", theId);
		
		theQuery.executeUpdate();

	}

}
