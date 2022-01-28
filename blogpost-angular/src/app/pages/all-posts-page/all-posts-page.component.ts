import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-posts-page',
  templateUrl: './all-posts-page.component.html',
  styleUrls: ['./all-posts-page.component.css']
})
export class AllPostsPageComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
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
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
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
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit.",
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. In error hic blanditiis earum,
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
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
