package com.springboot.restblogpostapi.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.restblogpostapi.CurrentSession;
import com.springboot.restblogpostapi.entity.Comment;
import com.springboot.restblogpostapi.service.CommentService;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class CommentController {
	
	@Autowired
	private CommentService commentService;

	@Autowired
	private CurrentSession currentSession;
	

	@PostMapping("/comment/{postId}")
	public String addComment(@PathVariable int postId,@RequestBody Comment theComment,HttpServletRequest request) {
		
		final String authorizationHeader = request.getHeader("Authorization");

         	
		int userId= currentSession.getCurrentUserId(authorizationHeader);
          
        commentService.save(theComment, userId,postId);
		
		return "Succesfully added comment !!";
		
	}

}
