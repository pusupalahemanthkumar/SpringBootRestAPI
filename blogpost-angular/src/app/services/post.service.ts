import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from '@angular/common/http';
import {UserService} from "./user.service"

@Injectable({ providedIn: 'root' })
export class PostService {

  constructor(private http: HttpClient,private userService: UserService ) { }

  getAllPost() {
    return this.http
      .get(`http://localhost:8082/api/posts/`,{
        headers: new HttpHeaders({ 'Authorization': `Bearer ${this.userService.getJwtToken()}` }),
        observe: 'response'
      });
  }

}