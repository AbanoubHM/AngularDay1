import { IProduct } from './../sharedClasses/IProduct';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DiscountOffers } from '../sharedClasses/DiscountOffers';
import { ICategory } from '../sharedClasses/ICategory';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  errMsg:string=""
  custName:string=""
  noTable:boolean=false
  discount:DiscountOffers
  storeName:string
  storeLogo:string
  productList:IProduct[]=[]
  prod5?:IProduct
  categoryList:ICategory[]
  clientName:string
  isPurshased: boolean
  noDiscount:boolean=false
  singleProduct:boolean=false

  @Output() productEvent=new EventEmitter();

  constructor(private productSer:ProductService) {

    
    this.discount=DiscountOffers.C
    this.storeName="My Store"
    this.storeLogo="testLogo"
    // this.productList=[{ID:1,Name:"Product1",Quantity:5,Price:50,Img:"../assets/p1.png"}
    //   ,{ID:2,Name:"Product2",Quantity:7,Price:75,Img:"../assets/prod2.png"},{ID:3,Name:"Product3",Quantity:9,Price:65,Img:"../assets/prod3.jpg"}
    //   ,{ID:4,Name:"Product4",Quantity:2,Price:45,Img:"../assets/p1.png"},{ID:5,Name:"Product5",Quantity:1,Price:66,Img:"../assets/prod2.png"}]
    this.categoryList=[{ID:1,Name:"Category1"},{ID:2,Name:"Category2"},{ID:3,Name:"Category3"},{ID:4,Name:"Category4"},{ID:5,Name:"Category5"},{ID:6,Name:"Category6"}]
    this.clientName="ClientTest"
    this.isPurshased=true

  }
  
  
  ngOnInit(): void {
    
    
    if (this.discount==DiscountOffers.A) {
      this.noDiscount=true  
    }else{
      this.noDiscount=false
    }
  }
  renderValues(){
    this.productSer.getAllProducts().subscribe(prodData=>{
      this.productList=prodData
    },
    error=>{
      this.errMsg=error
    })
    //console.log(this.productList);
    
    this.noTable=true;
  }
  hideTable() {
    this.productSer.getProductById(3).subscribe(dat=>{
      this.prod5=dat
    })
    this.singleProduct=true;
    //console.log(this.prod5)
    // this.productEvent.emit()
  }
tttt(event:any){
  this.custName=event.target.value;
}
}
