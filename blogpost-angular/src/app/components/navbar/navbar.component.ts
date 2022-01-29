import { Component, OnInit } from '@angular/core';

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarClass = "mobile-links";
  isLogin: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.isAuthenticatedEmitter.subscribe((data) => {
      this.isLogin = data;
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

}
