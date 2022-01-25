package com.springboot.restblogpostapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.restblogpostapi.controller.RequestBlogPostUpdate;
import com.springboot.restblogpostapi.dao.BlogPostDAO;
import com.springboot.restblogpostapi.entity.BlogPost;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BlogPostServiceImpl implements BlogPostService {
	
	private BlogPostDAO blogPostDao;
	
	@Autowired
	public BlogPostServiceImpl(BlogPostDAO theblogPostDao) {
		blogPostDao=theblogPostDao;
		
	}

	@Override
	@Transactional
	public List<BlogPost> findAll() {
		
		return blogPostDao.findAll();
	}

	@Override
	@Transactional
	public BlogPost findById(int theId) {
		
		return blogPostDao.findById(theId);
	}

	@Override
	@Transactional
	public void save(BlogPost thePost,int userId) {
		
		blogPostDao.save(thePost,userId);

	}
	

	@Override
	@Transactional
	public void updateById(RequestBlogPostUpdate theBlogPostUpdate, int userId) {
		
		blogPostDao.updateById(theBlogPostUpdate, userId);
		
		
		
	}

	@Override
	@Transactional
	public void deleteById(int theId) {
		
		blogPostDao.deleteById(theId);

	}

}
