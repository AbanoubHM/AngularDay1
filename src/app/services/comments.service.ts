import { IComment } from './../sharedClasses/IComment';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private _url:string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getComments(id:any):Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this._url}/${id}/comments`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
}
