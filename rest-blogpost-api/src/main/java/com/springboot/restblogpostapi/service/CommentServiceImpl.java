package com.springboot.restblogpostapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.springboot.restblogpostapi.dao.CommentDAO;
import com.springboot.restblogpostapi.entity.Comment;

@Service
public class CommentServiceImpl implements CommentService {
	
	@Autowired
	private CommentDAO commentDAO;

	@Override
	@Transactional
	public void save(Comment theComment, int userId,int postId) {
		
		commentDAO.save(theComment, userId,postId);
		
	}

}
