import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit {
  post = {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
    dignissimos animi similique nostrum veniam, sint voluptatem, impedit molestias
    et doloribus quas aut omnis laborum consequatur placeat.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quibusdam asperiores fuga pariatur quia
    modi nesciunt laboriosam sed rerum expedita?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit laudantium recusandae culpa dicta
    deleniti temporibus doloribus delectus, deserunt eveniet illum quasi, eaque iusto natus similique vero
    consequatur ullam excepturi.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
    dignissimos animi similique nostrum veniam, sint voluptatem, impedit molestias
    et doloribus quas aut omnis laborum consequatur placeat.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quibusdam asperiores fuga pariatur quia
    modi nesciunt laboriosam sed rerum expedita?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit laudantium recusandae culpa dicta
    deleniti temporibus doloribus delectus, deserunt eveniet illum quasi, eaque iusto natus similique vero
    consequatur ullam excepturi.
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
    dignissimos animi similique nostrum veniam, sint voluptatem, impedit molestias
    et doloribus quas aut omnis laborum consequatur placeat.
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni quibusdam asperiores fuga pariatur quia
    modi nesciunt laboriosam sed rerum expedita?
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit laudantium recusandae culpa dicta
    deleniti temporibus doloribus delectus, deserunt eveniet illum quasi, eaque iusto natus similique vero
    consequatur ullam excepturi.`,
    author: "Hemanth Kumar",
    date: "28-01-2022",
    likesCount: 45
  };
  comments = [
    {
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!`,
    author:"Hemanth Kumar",
    date:"28-01-2022"
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!`,
    author:"Hemanth Kumar",
    date:"28-01-2022"
    },
    {
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quos eos est
    accusantium veniam, deserunt voluptate voluptates vitae
    deleniti molestiae!`,
    author:"Hemanth Kumar",
    date:"28-01-2022"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
