import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../sharedClasses/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string="/assets/Data/Products.json"

  constructor(private http:HttpClient) { 
    
  }
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  getProductById(prodId:number){
    if (prodId == NaN) {
      return null
    }
    let prdList:IProduct[]
    let prd
    this.getAllProducts().subscribe(dd=>{
      prd=dd.find(e=>e.ID===prodId)
      prd=prdList.find(e=>e.ID===prodId)
    })
    if (!prd) {
      return null
    } else {
      return prd
    }
  }
}
