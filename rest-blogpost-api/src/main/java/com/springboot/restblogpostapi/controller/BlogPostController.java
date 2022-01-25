package com.springboot.restblogpostapi.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.restblogpostapi.CurrentSession;
import com.springboot.restblogpostapi.entity.BlogPost;
import com.springboot.restblogpostapi.entity.User;
import com.springboot.restblogpostapi.security.JwtUtil;
import com.springboot.restblogpostapi.service.BlogPostService;
import com.springboot.restblogpostapi.service.UserService;

@RestController
@RequestMapping("/api")
public class BlogPostController {
	
	private BlogPostService blogPostService;
	
	@Autowired
	private JwtUtil jwtUtil;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private CurrentSession currentSession;
	
	// Constructor Dependency Injection
	@Autowired
	public BlogPostController(BlogPostService theBlogPostService) {
		blogPostService=theBlogPostService;
	}
	
	@GetMapping("/posts")
	public List<BlogPost> getBlogPosts() {
		
		List<BlogPost> blogPosts =blogPostService.findAll();
		
		return blogPosts;
	}
	
	
	@PostMapping("/posts")
	public BlogPost addBlogPost(@RequestBody BlogPost theBlogPost,HttpServletRequest request) {
		
		theBlogPost.setId(0);
		
		final String authorizationHeader = request.getHeader("Authorization");
		
		int userId= currentSession.getCurrentUserId(authorizationHeader);
		
		blogPostService.save(theBlogPost,userId);
		
		return theBlogPost;
	}
	
	@PutMapping("/posts")
	public String updateBlogPost(@RequestBody RequestBlogPostUpdate theBlogPostUpdate,HttpServletRequest request) {
		
		final String authorizationHeader = request.getHeader("Authorization");
				
		int userId= currentSession.getCurrentUserId(authorizationHeader);
		
		blogPostService.updateById(theBlogPostUpdate, userId);

		return "Updated Suceessfully";
	}
	
	@GetMapping("/posts/{postId}")
	public BlogPost getBlogPost(@PathVariable int postId) {
		System.out.println("Controller  :"+ postId);
		BlogPost theBlogPost = blogPostService.findById(postId);
		if(theBlogPost == null) {
			throw new RuntimeException("Blog Post Not Found !!");
		}
		
		return theBlogPost;
	}
	
	@DeleteMapping("/posts/{postId}")
	public String deleteBlogPost(@PathVariable int postId) {
		
		BlogPost theBlogPost = blogPostService.findById(postId);
		
		if(theBlogPost==null) {
			throw new RuntimeException("Post not Found !!");
		}
		blogPostService.deleteById(postId);
		
		return "Deleted sucessfully";
		
	}

}
