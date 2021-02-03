import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {take} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {

  pandaArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  array$: Observable<any> = this.pandaArray.asObservable()

  // obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // array$: Observable<any> =  this.obsArray.asObservable();

  subCatArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([])
  subCatArray$: Observable<any> = this.subCatArray.asObservable()

  teddaArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([])
  teddaArray$: Observable<any> = this.teddaArray.asObservable()


  userName: BehaviorSubject<any[]> = new BehaviorSubject<any[]> ([])
  userName$: Observable<any> = this.teddaArray.asObservable()

  constructor() { }

  publishFilterData(data: any) {
    console.log(data)

    this.pandaArray.next(data)
  }

  publishSubCategory(data: any) {
    this.subCatArray.next(data)
  }

  addProductsToBasket(item){
    this.teddaArray$.pipe(take(1)).subscribe(val=>{
      console.log(val)

      let newArr = [...val,item];

      this.teddaArray.next(newArr)
    })
  }

  deleteProduct(index){
    this.teddaArray$.pipe(take(1)).subscribe( val =>{
     var arr = this.teddaArray.getValue()
     arr.splice(index,1)

     this.teddaArray.next(arr)
    })
  }

  publishUserData(data: any){

    this.userName.next(data)
  }


}
