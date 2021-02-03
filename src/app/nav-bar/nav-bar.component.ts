import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterDataService } from '../Services/filter-data.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,  AfterViewInit {

arrBasket

 userName = "Sign in"
  constructor( private router: Router , private FilterSvc: FilterDataService , private route : ActivatedRoute ) {
this.getBasketDate()
this.route.queryParams.subscribe(data =>{
console.log(data.user)

  this.userName= data.user



})

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
  homeRedirect(){
    this.router.navigate([''])
  }

  getBasketDate(){
this.arrBasket = []

this.FilterSvc.teddaArray$.subscribe(element=>{

  if(element.length !=0){
    this.arrBasket = element
  }
  else{
    this.arrBasket= []
  }
})

  }
}
