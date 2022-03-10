import { CommentsService } from './../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IComment } from '../sharedClasses/IComment';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss']
})
export class PostCommentsComponent implements OnInit {
  errMsg:string=''
  pstId:any
  comments?:IComment[]
  constructor(private activatedRoute:ActivatedRoute,private router:Router,private cmntSrv:CommentsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.pstId=params.get("id")
    this.getComments()

    })
  }
  goNext()
  {
    let nextId=parseInt(this.pstId)+1;
    this.router.navigate(["/posts",nextId])
    //this.getComments()
  }

  goPrev()
  {
    let prevId=parseInt(this.pstId)-1;
    this.router.navigate(["/posts",prevId])
    //this.getComments()
  }
  getComments(){
    this.cmntSrv.getComments(this.pstId).subscribe(cmntData=>{
      this.comments=cmntData
    },error=>{
      this.errMsg=error
    })
  }

}
