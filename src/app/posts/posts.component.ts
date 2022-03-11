import { PostService } from './../services/post.service';
import { IPost } from './../sharedClasses/IPost';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postList?:IPost[]
  errMsg:string=''
  constructor(private activatedRoute:ActivatedRoute,private postSrv:PostService,private router:Router) { }

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe(postData=>{
      this.postList=postData
    },
    error=>{
      this.errMsg=error
    })
  }
  getComments(id:number){
    this.router.navigate([id],{relativeTo:this.activatedRoute})
  }

}
