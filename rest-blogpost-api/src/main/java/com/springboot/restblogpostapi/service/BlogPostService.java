package com.springboot.restblogpostapi.service;

import java.util.List;

import com.springboot.restblogpostapi.controller.RequestBlogPostUpdate;
import com.springboot.restblogpostapi.entity.BlogPost;

public interface BlogPostService {
	
	public List<BlogPost> findAll();
	
	public BlogPost findById(int theId);
	
	public void save(BlogPost thePost,int userId);
	
	public void updateById(RequestBlogPostUpdate theBlogPostUpdate,int userId);
	
	public void deleteById(int theId);

}
