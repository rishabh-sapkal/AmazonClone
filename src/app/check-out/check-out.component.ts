import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { FilterDataService } from '../Services/filter-data.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  arrProducts: any;
  grandTotal: number;

  constructor( private nav: NavbarService , private FilterSvc : FilterDataService) {
    this.nav.showR()
    this.getBasketData()
   }

  ngOnInit(): void {
  }

getBasketData(){
  this.arrProducts= []
  this.FilterSvc.teddaArray$.subscribe(data=>{
    console.log(data)

    if(data.length !=0){
      this.arrProducts = data
      this.grandTotal = 0

      this.arrProducts.forEach(data=>{
        this.grandTotal += data.price
      })
    }
  })
}

deleteProduct(index){
this.FilterSvc.deleteProduct(index)
}

}
