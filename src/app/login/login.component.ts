import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavbarService } from '../navbar.service';
import * as fireabase from 'firebase/app';
import { FilterDataService } from '../Services/filter-data.service';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private nav: NavbarService , private afAuth : AngularFireAuth , private filterSvc : FilterDataService) {
    this.nav.hideR()
  }

  ngOnInit(): void {}


  signInwithGoogle(){


    var provider =  new fireabase.auth.GoogleAuthProvider()

    this.afAuth.signInWithPopup(provider).then(data=>{
      console.log(data)

      let params = {
        'user': data['user'].displayName
      }

      let navigationExtra : NavigationExtras = {
        queryParams : params
      }

      // this.filterSvc.publishUserData(data['user'].displayName)

      this.router.navigate([''],navigationExtra)


    })
  }
}
