-- Creating Database
CREATE DATABASE  IF NOT EXISTS `rest_blog_app`;
USE `rest_blog_app`;


-- Creating  User Table
DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `role` varchar(150) DEFAULT NULL,
  `active` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

-- Creating  Post Tables
DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(150) DEFAULT NULL,
  `likes_count` int(11) DEFAULT 0,
  `date` datetime DEFAULT NULL,
  `author_id` int(11)  DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`author_id`) REFERENCES `user`(id) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `comment`(
	`id` int(11) NOT NULL AUTO_INCREMENT,
    `text` varchar(150) DEFAULT NULL,
    `date` datetime DEFAULT NULL,
    `author_id` int(11)  DEFAULT NULL,
    `post_id` int(11)  DEFAULT NULL,
     PRIMARY KEY (`id`),
     FOREIGN KEY (`post_id`) REFERENCES `post`(id),
     FOREIGN KEY (`author_id`) REFERENCES `user`(id) 
);

-- Inserting Sample User Data
INSERT INTO `user` VALUES 
	(1,'hemanth','hemanth@gmail.com','123456','ROLE_ADMIN','true'),
    (2,'abk','abk@gmail.com','123456','ROLE_USER','true'),
    (3,'bala','bala@gmail.com','123456','ROLE_USER','true'),
    (4,'sanjay','sanjay@gmail.com','123456','ROLE_USER','true'),
    (5,'jayanth','jayanth@gmail.com','123456','ROLE_USER','true');

-- Inserting Sample Data

INSERT INTO `post` VALUES 
	(1,'React','A javascipt libaray',10,CURDATE(),1),
    (2,'Angular','A javascipt/Typescript libaray',23,CURDATE(),1),
    (3,'Nodejs','A javascipt run time', 45, CURDATE(),2),
    (4,'PWA','Progressive Web Applications',8,CURDATE(),3),
    (5,'Mongodb','No SQL Database Solution!!',15,CURDATE(),1);

-- Inserting Sample Data
INSERT INTO `comment` VALUES
	(1,"AWESOME POST !!",CURDATE(),2,1),
    (2,"AMAZING  POST !!",CURDATE(),3,1),
    (3,"AWESOME POST !!",CURDATE(),2,2),
    (4,"AWESOME POST !!",CURDATE(),2,3),
    (5,"AWESOME POST !!",CURDATE(),2,4),
    (6,"AWESOME POST !!",CURDATE(),2,5);
    

-- Adding Constraints
ALTER TABLE `rest_blog_app`.`post` DROP FOREIGN KEY `post_ibfk_1`;
ALTER TABLE `rest_blog_app`.`post` 
  ADD CONSTRAINT `post_ibfk_1`
  FOREIGN KEY (`author_id`)
  REFERENCES `rest_blog_app`.`user` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;

ALTER TABLE `rest_blog_app`.`comment` DROP FOREIGN KEY `comment_ibfk_1`, DROP FOREIGN KEY `comment_ibfk_2`;
ALTER TABLE `rest_blog_app`.`comment` 
  ADD CONSTRAINT `comment_ibfk_1`
  FOREIGN KEY (`post_id`)
  REFERENCES `rest_blog_app`.`post` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE,
  ADD CONSTRAINT `comment_ibfk_2`
  FOREIGN KEY (`author_id`)
  REFERENCES `rest_blog_app`.`user` (`id`)
  ON DELETE CASCADE
  ON UPDATE CASCADE;


	