import { PostCommentsComponent } from './post-comments/post-comments.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'products',component:ProductComponent},
  {path:'users',component:UsersComponent},
  {path:'products/:id',component:ProductComponent},
  {path:'posts',component:PostsComponent},
  {path:'posts/:id',component:PostCommentsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
