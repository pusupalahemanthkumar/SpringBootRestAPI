import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PostItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
