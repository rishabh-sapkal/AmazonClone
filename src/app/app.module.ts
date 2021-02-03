import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms'

import { MatCarouselModule } from '@ngbmodule/material-carousel';

const firebaseConfig = {

}; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CheckOutComponent,
    LoginComponent,
    ProductComponent,
    CategoryComponent,
    SubCategoryComponent
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Required for everything
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, BrowserAnimationsModule , // Only required for storage features
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
