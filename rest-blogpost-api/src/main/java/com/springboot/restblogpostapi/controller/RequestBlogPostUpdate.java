package com.springboot.restblogpostapi.controller;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class RequestBlogPostUpdate {
	
	private int id;
	
	private String title;
	
	private String description;
	
	private int likesCount;
	
	@JsonFormat(shape=JsonFormat.Shape.STRING,pattern="dd-MM-yyyy")
	private Date date;
	
	public RequestBlogPostUpdate() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getLikesCount() {
		return likesCount;
	}

	public void setLikesCount(int likesCount) {
		this.likesCount = likesCount;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
}
