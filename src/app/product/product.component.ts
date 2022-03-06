import { IProduct } from './../sharedClasses/IProduct';
import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../sharedClasses/DiscountOffers';
import { ICategory } from '../sharedClasses/ICategory';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  discount:DiscountOffers
  storeName:string
  storeLogo:string
  productList:IProduct[]
  categoryList:ICategory[]
  clientName:string
  isPurshased: boolean
  constructor() {
    this.discount=DiscountOffers.C
    this.storeName="This Store"
    this.storeLogo="testLogo"
    let p1:IProduct={
      ID:1,
      Name:"Product1",
      Quantity:5,
      Price:50,
      Img:"../assets/p1.png"
    }
    this.productList=[p1]
    let c1:ICategory={
      ID:1,
      Name:"Category1"
    }
    this.categoryList=[c1]
    this.clientName="ClientTest"
    this.isPurshased=true
   }


  ngOnInit(): void {
  }

}
