import { Component, Input, OnInit } from '@angular/core';
import { FilterDataService } from '../Services/filter-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() title

  arrSubcat

  subCatTitle
  subCatImg

  constructor(private filterScv: FilterDataService) { }

  ngOnInit(): void {

    this.filterScv.array$.subscribe(data => {
      console.log(data)

      data.forEach(element => {

        if (element.title == this.title) {

          this.arrSubcat = []
          this.arrSubcat = element['subCategories']

          // this.arrSubcat.forEach(panda => {
          //   this.subCatTitle = panda.type
          //   this.subCatImg = panda.subcatAvatar
          // })

        }
      })
    })

  }

  sendSubCatData(data){
console.log(data)
this.filterScv.publishSubCategory(data)

}

}
