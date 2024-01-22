import { ProductDetailsComponent } from './../product-details/product-details.component';
import { product } from 'src/datatype';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  searchResult: undefined | product[];
  constructor(private route: Router, private product: ProductService) { }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if(val.url) {
        if(localStorage.getItem('sellers') && val.url.includes('sellers')){
          console.warn("in sellers area")
          this.menuType = "sellers"
        } else{
          console.warn("outside sellers")
          this.menuType = 'default'
        }
      }
    })
  }

  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProduct(element.value).subscribe((result) => {
        console.warn(element.value)

        if (result.length > 5) {
          result.length = 5;
        }

        this.searchResult = result;
      })
    }

  }

  hideSearch() {
    this.searchResult = undefined
  }

  redirectToDetails(id: number) {
    this.route.navigate(['/details/'+id])
  }


  submitSearch(val: string) {
    console.warn(val)
    this.route.navigate([`search/${val}`]);
  }
}
