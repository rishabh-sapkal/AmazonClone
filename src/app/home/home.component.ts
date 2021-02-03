import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { FilterDataService } from '../Services/filter-data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

imageCaro = "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"


filterData = [
    {
      'title': 'Wardrobe',
      'subCategories': [
        {
          'type': "Men's Fashion",
          'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Mens_fashion_186x116._SY116_CB426138153_.jpg',
          'products': [
            {
              'title': "Amazon Brand -Symbol XXX",
              'avatar': "https://m.media-amazon.com/images/I/A1gtkzQtJWL._AC_UL320_.jpg",
              'price': 449,
              'rating': 4
            },
            {
              'title': "Levi Shirt",
              'avatar': "https://m.media-amazon.com/images/I/81HLwcATXRL._AC_UL320_.jpg",
              'price': 1999,
              'rating': 5
            }]
        },
        {
          'type': "Women's Fashion", 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Women_fashion_186x116._SY116_CB425816290_.jpg',
          'products': [
            {
              'title': "Gransberry",
              'avatar': "https://m.media-amazon.com/images/I/817GktZUmEL._AC_UL320_.jpg",
              'price': 1449,
              'rating': 4
            },
            {
              'title': "Puff Sleeve's",
              'avatar': "https://m.media-amazon.com/images/I/41BCX7c4KfL._AC_UL320_.jpg",
              'price': 999,
              'rating': 5
            }]
        },
        {
          'type': "Kid's Fashion", 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Home_Decor_186x116._SY116_CB425816290_.jpg',
          'products': [

            {
              'title': "Krishna",
              'avatar': "https://m.media-amazon.com/images/I/41hK14mBQlL._AC_UL320_.jpg",
              'price': 1449,
              'rating': 4
            },
            {
              'title': "Bhindi Bachha",
              'avatar': "https://m.media-amazon.com/images/I/31YUgiCP0BL._AC_UL320_.jpg",
              'price': 1999,
              'rating': 5
            }]
        }]
    },

    {
      'title': 'Electronics',
      'subCategories': [
        {
          'type': 'Mobile-Phone', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Electronics_186x116._SY116_CB425816290_.jpg',
          'products': [


            {

              'title': "Apple iPhone 11 Pro max",
              'avatar': "https://m.media-amazon.com/images/I/611JavcU70L._AC_UY218_.jpg",
              'price': 108599,
              'rating': 5

            },
            {
              'title': "OnePlus",
              'avatar': "https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY218_.jpg",
              'price': 41999,
              'rating': 4

            }]
        },
        { 'type': 'Dishwasher', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg',
        'products': [


          {

            'title' : "Bosch Dishwasher",
            'avatar' : "https://m.media-amazon.com/images/I/61IuCS+7efL._AC_UL320_.jpg",
            'price' : 21599,
            'rating': 4

         },
         {
            'title' : "Voltas Beko",
            'avatar' : "https://m.media-amazon.com/images/I/61w8zR6LbJL._AC_UL320_.jpg",
            'price' : 41999,
            'rating' : 4

         }
         ] },
        { 'type': 'Washing-Machine', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg' ,
        'products': [


          {

            'title' : "Panasonic 6Kg",
            'avatar' : "https://m.media-amazon.com/images/I/71m7U364CDL._AC_SX180_SY120_QL70_.jpg",
            'price' : 15900,
            'rating': 4

         },
         {
            'title' : "Samsung 6.2Kg",
            'avatar' : "https://m.media-amazon.com/images/I/61JeJKWBWNL._AC_UY218_.jpg",
            'price' : 13800,
            'rating' : 4

         }
         ] }
        ]
    },
    {
      'title': 'Electronics',
      'subCategories': [
        {
          'type': 'Mobile-Phone', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Electronics_186x116._SY116_CB425816290_.jpg',
          'products': [


            {

              'title': "Apple iPhone 11 Pro max",
              'avatar': "https://m.media-amazon.com/images/I/611JavcU70L._AC_UY218_.jpg",
              'price': 108599,
              'rating': 5

            },
            {
              'title': "OnePlus",
              'avatar': "https://m.media-amazon.com/images/I/619iTNHSCGL._AC_UY218_.jpg",
              'price': 41999,
              'rating': 4

            }]
        },
        { 'type': 'Dishwasher', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_DB_QC_186x116_1._SY116_CB433700928_.jpg',
        'products': [


          {

            'title' : "Bosch Dishwasher",
            'avatar' : "https://m.media-amazon.com/images/I/61IuCS+7efL._AC_UL320_.jpg",
            'price' : 21599,
            'rating': 4

         },
         {
            'title' : "Voltas Beko",
            'avatar' : "https://m.media-amazon.com/images/I/61w8zR6LbJL._AC_UL320_.jpg",
            'price' : 41999,
            'rating' : 4

         }
         ] },
        { 'type': 'Washing-Machine', 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Home/LA/LATVFdesktopQC/D16106072_IN_LATV_MSO_QC_Washing-machine_186x116._SY116_CB432544816_.jpg' ,
        'products': [


          {

            'title' : "Panasonic 6Kg",
            'avatar' : "https://m.media-amazon.com/images/I/71m7U364CDL._AC_SX180_SY120_QL70_.jpg",
            'price' : 15900,
            'rating': 4

         },
         {
            'title' : "Samsung 6.2Kg",
            'avatar' : "https://m.media-amazon.com/images/I/61JeJKWBWNL._AC_UY218_.jpg",
            'price' : 13800,
            'rating' : 5

         }
         ] }
      ]
    },
    {
      'title': 'Wardrobe',
      'subCategories': [
        {
          'type': "Men's Fashion",
          'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Mens_fashion_186x116._SY116_CB426138153_.jpg',
          'products': [
            {
              'title': "Amazon Brand -Symbol XXX",
              'avatar': "https://m.media-amazon.com/images/I/A1gtkzQtJWL._AC_UL320_.jpg",
              'price': 449,
              'rating': 4
            },
            {
              'title': "Levi Shirt",
              'avatar': "https://m.media-amazon.com/images/I/81HLwcATXRL._AC_UL320_.jpg",
              'price': 1999,
              'rating': 5
            }]
        },
        {
          'type': "Women's Fashion", 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Women_fashion_186x116._SY116_CB425816290_.jpg',
          'products': [
            {
              'title': "Gransberry",
              'avatar': "https://m.media-amazon.com/images/I/817GktZUmEL._AC_UL320_.jpg",
              'price': 1449,
              'rating': 4
            },
            {
              'title': "Puff Sleeve's",
              'avatar': "https://m.media-amazon.com/images/I/41BCX7c4KfL._AC_UL320_.jpg",
              'price': 999,
              'rating': 5
            }]
        },
        {
          'type': "Kid's Fashion", 'subcatAvatar': 'https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/BrightBuy/Home_Decor_186x116._SY116_CB425816290_.jpg',
          'products': [

            {
              'title': "Krishna",
              'avatar': "https://m.media-amazon.com/images/I/41hK14mBQlL._AC_UL320_.jpg",
              'price': 1449,
              'rating': 4
            },
            {
              'title': "Bhindi Bachha",
              'avatar': "https://m.media-amazon.com/images/I/31YUgiCP0BL._AC_UL320_.jpg",
              'price': 1999,
              'rating': 5
            }]
        }]
    }]

  enableMagic: boolean = false

  constructor(private nav: NavbarService, private filtSvc: FilterDataService , private route:ActivatedRoute) {
    this.nav.showR()
    this.getFilterData()
  }


  ngOnInit(): void {
  }

  getFilterData() {

    console.log(this.filterData)


    this.filtSvc.publishFilterData(this.filterData)

  }

  toggleMagic() {

    this.enableMagic = !this.enableMagic
  }



}
