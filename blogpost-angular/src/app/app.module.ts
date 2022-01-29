import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PostDetailComponent } from './pages/single-post-page/post-detail/post-detail.component';
import { CommentComponent } from './pages/single-post-page/comment/comment.component';
import { PostItemComponent } from './pages/all-posts-page/post-item/post-item.component';
import { PostsGeneralComponent } from './pages/all-posts-page/posts-general/posts-general.component';
import { PostsJobsComponent } from './pages/all-posts-page/posts-jobs/posts-jobs.component';
import { PostsTechComponent } from './pages/all-posts-page/posts-tech/posts-tech.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    AllPostsPageComponent,
    SinglePostPageComponent,
    AddPostPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PostDetailComponent,
    CommentComponent,
    PostItemComponent,
    PostsGeneralComponent,
    PostsJobsComponent,
    PostsTechComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
