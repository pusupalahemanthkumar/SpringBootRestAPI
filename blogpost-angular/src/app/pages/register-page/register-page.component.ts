import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  @ViewChild('registerForm', { static: false }) registerForm: NgForm;
  error = null;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.registerForm.value);

    this.userService.register(
      this.registerForm.value.userName,
      this.registerForm.value.email,
      this.registerForm.value.password
    ).subscribe((responseData) => {
      console.log(responseData);
      this.error=null;
      this.router.navigate(['/login']);
    },
      (err) => {
        this.error=err.message;
      }
    );

  }

}
