import { Component, Input, OnInit } from '@angular/core';
import { FilterDataService } from '../Services/filter-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

// @Input() id
// @Input() rating
// @Input() price
// @Input() title
// @Input() imgSrc

arrProducts
  arrStars: any[];

  constructor( private FilterSvc : FilterDataService ) {

    this.FilterSvc.subCatArray$.subscribe(data=>{
      console.log(data)
      this.loadProducts(data['products'])
    })
   }

  ngOnInit(): void {
  }

loadProducts(data){

  this.arrProducts=[]

  this.arrProducts = data

  console.log(this.arrProducts)

}

printStar(rating){
  this.arrStars=[]
    Array(rating).fill(0).map((el)=>{
        this.arrStars.push(el)
    })

    return this.arrStars
}

addToBasket(item){

  this.FilterSvc.addProductsToBasket(item)
}


}
