import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../sharedClasses/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string="http://localhost:5033/api/Products"

  constructor(private http:HttpClient) { 
    
  }
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  getProductById(prodId:number):Observable<IProduct>{
    //console.log(`${this._url}/${prodId}`);
    
    return this.http.get<IProduct>(`${this._url}/${prodId}`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
}
