import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  navbarClass="mobile-links";

  constructor() { }

  ngOnInit(): void {
  }
  ToggleMobileMenu(){
    console.log("clicked")
    if(this.navbarClass==="mobile-links"){
      this.navbarClass="mobile-links open";
    }else{
      this.navbarClass="mobile-links";
    }
  }

}
