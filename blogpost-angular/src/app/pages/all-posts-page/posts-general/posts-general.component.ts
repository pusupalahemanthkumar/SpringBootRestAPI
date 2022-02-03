import { Component, OnInit,OnDestroy } from '@angular/core';

import { PostService } from "../../../services/post.service"

@Component({
  selector: 'app-posts-general',
  templateUrl: './posts-general.component.html',
  styleUrls: ['./posts-general.component.css']
})
export class PostsGeneralComponent implements OnInit,OnDestroy {
  posts = []
  postsSub:any;


  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postsSub=this.postService.getAllPost().subscribe(
      (responseData)=>{
        console.log(responseData.body);
        this.posts=<[]>responseData.body;
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();

  }

}
