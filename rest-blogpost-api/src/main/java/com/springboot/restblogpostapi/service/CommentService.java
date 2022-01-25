package com.springboot.restblogpostapi.service;

import com.springboot.restblogpostapi.entity.Comment;

public interface CommentService {
	public void save(Comment theComment,int userId,int postId);

}
