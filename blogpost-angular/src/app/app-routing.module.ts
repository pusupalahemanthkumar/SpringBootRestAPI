import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AllPostsPageComponent } from './pages/all-posts-page/all-posts-page.component';
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component';
import { AddPostPageComponent } from './pages/add-post-page/add-post-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { PostsGeneralComponent } from './pages/all-posts-page/posts-general/posts-general.component';
import { PostsJobsComponent } from './pages/all-posts-page/posts-jobs/posts-jobs.component';
import { PostsTechComponent } from './pages/all-posts-page/posts-tech/posts-tech.component';

import { AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'posts',component:AllPostsPageComponent,
    canActivate: [AuthGuard],
    children:[
      {path:"general",component:PostsGeneralComponent},
      {path:"jobs",component:PostsJobsComponent},
      {path:"tech",component:PostsTechComponent},
    ]
  },
  {
    path:'add-post',component:AddPostPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'posts/:id',component:SinglePostPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',component:LoginPageComponent
  },
  {
    path:'register',component:RegisterPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
