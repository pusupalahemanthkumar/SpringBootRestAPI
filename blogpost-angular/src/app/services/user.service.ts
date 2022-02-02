import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';

import {CookieService} from "ngx-cookie-service"
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  isAuthenticatedEmitter = new Subject<boolean>();

  constructor(private http: HttpClient,private cookie:CookieService) { }

  login(username: string, password: string) {
    return this.http
      .post(`http://localhost:8082/authenticate`,
        {
          username: username,
          password: password
        }, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      });
  }
  logout(){
    localStorage.removeItem('token');
  }

  setJwtToken(token:string){
    localStorage.setItem('token',token);
  }
  getJwtToken(){
    return localStorage.getItem('token');
  }

  register(username:string,email:string,password:string){
    return this.http
      .post(`http://localhost:8082/api/register`,
        {
          userName: username,
          email:email,
          password: password,
          role:'ROLE_USER',
          active:true
        }, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        observe: 'response'
      });

  }



}
