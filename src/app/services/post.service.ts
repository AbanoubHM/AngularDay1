import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../sharedClasses/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private _url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }

}
