package com.springboot.restblogpostapi.entity;


import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="comment")
public class Comment {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="text")
	private String text;
	
	@Column(name="date")
	@JsonFormat(shape=JsonFormat.Shape.STRING,pattern="dd-MM-yyyy")
	private Date date;
	
//	@Column(name="author_id")
//	private int authorId;
//		
//	@Column(name="post_id")
//	private int postId;
	
	@ManyToOne(fetch=FetchType.EAGER,
			cascade = 
				{CascadeType.PERSIST, CascadeType.MERGE,
				CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "post_id")
	@JsonIgnore
	private BlogPost blogpost;
	
	@ManyToOne(fetch=FetchType.EAGER,
			cascade = 
				{CascadeType.PERSIST, CascadeType.MERGE,
				CascadeType.DETACH, CascadeType.REFRESH })
	@JoinColumn(name = "author_id")
	private User author;
		
	public Comment() {
		
	}

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

 
	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}

	public User getAuthor() {
		return author;
	}

	public void setAuthor(User author) {
		this.author = author;
	}


	public BlogPost getBlogpost() {
		return blogpost;
	}


	public void setBlogpost(BlogPost blogpost) {
		this.blogpost = blogpost;
	}

//	public int getPostId() {
//		return postId;
//	}
//
//	public void setPostId(int postId) {
//		this.postId = postId;
//	}
//	public int getAuthorId() {
//		return authorId;
//	}
//
//	public void setAuthorId(int authorId) {
//		this.authorId = authorId;
//	}
	
	


}
