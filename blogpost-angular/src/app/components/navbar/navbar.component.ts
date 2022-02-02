import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  navbarClass = "mobile-links";
  isLogin: boolean = false;
  authSub:Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if(this.userService.getJwtToken()){
      this.isLogin=true;
    }else{
      this.isLogin=false;
    }
    this.authSub=this.userService.isAuthenticatedEmitter.subscribe((data)=>{
      this.isLogin=data;
    })
  }
  ToggleMobileMenu() {
    console.log("clicked")
    if (this.navbarClass === "mobile-links") {
      this.navbarClass = "mobile-links open";
    } else {
      this.navbarClass = "mobile-links";
    }
  }
  onLogout(){
    this.userService.logout();
    this.userService.isAuthenticatedEmitter.next(false);
  }
  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
