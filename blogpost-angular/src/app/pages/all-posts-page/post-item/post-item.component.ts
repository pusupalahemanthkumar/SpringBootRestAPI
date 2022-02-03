import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  ShowDetails(){
    this.router.navigate(['/posts',<number>this.post.id], );

  }

}
