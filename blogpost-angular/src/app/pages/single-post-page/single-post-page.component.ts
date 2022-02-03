import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css'],
})
export class SinglePostPageComponent implements OnInit, OnDestroy {
  post = null;
  getPostSub: Subscription;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.getPostSub = this.postService.getPost(id).subscribe(
      (responseData) => {
        console.log(responseData.body);
        this.post = responseData.body;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnDestroy(): void {
    if (this.getPostSub) {
      this.getPostSub.unsubscribe();
    }
  }
}
