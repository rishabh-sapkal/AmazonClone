import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {NavbarService} from './navbar.service'
import { FilterDataService } from './Services/filter-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'amazonClone';
userName
  @ViewChild('rNav') rNav!: ElementRef;

constructor( private nav: NavbarService , private FilterSvc : FilterDataService){

}
ngAfterViewInit(): void {
  this.nav.setRight(this.rNav);

  this.userName = this.FilterSvc.userName
}

}
