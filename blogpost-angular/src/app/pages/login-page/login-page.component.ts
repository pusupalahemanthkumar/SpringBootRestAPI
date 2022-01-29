import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('loginForm', { static: false }) loginForm: NgForm;
  error=null;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {

    this.userService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    ).
    subscribe((responseData) => {
      this.error=null;
      this.userService.setJwtToken(responseData.body['jwt']);
      this.userService.isAuthenticatedEmitter.next(true);
      this.router.navigate(['/posts','general']);

    },
      (err) => {
        if(err.status===403){
          this.error="Invalid userName or password !";
        }else{
          this.error="Something Went Wrong !!"
        }
      }
    )

  }

}
