import { Component, OnDestroy, OnInit ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent implements OnInit,OnDestroy {
  @ViewChild('postForm',{static:false}) postForm:NgForm;
  error=null;
  postServiceSub:Subscription;

  constructor(private postService:PostService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.postService.addPost(
      this.postForm.value.title,
      this.postForm.value.description
    ).subscribe((responseData)=>{
      console.log(responseData.body);
      this.router.navigate(['/posts','general']);
    },
    (err) => {
      if(err.status===403){
        this.error="Not Authorized !!";
      }else{
        this.error="Something Went Wrong !!"
      }
    }

    )


  }
  ngOnDestroy(): void {
    if(this.postServiceSub){
      this.postServiceSub.unsubscribe();
    }

  }

}
