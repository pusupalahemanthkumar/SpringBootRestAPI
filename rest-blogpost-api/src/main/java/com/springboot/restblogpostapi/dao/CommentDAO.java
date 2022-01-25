package com.springboot.restblogpostapi.dao;

import com.springboot.restblogpostapi.entity.Comment;

public interface CommentDAO {
	
	public void save(Comment theComment,int userId,int postId);

}
