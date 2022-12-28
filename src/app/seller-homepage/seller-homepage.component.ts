import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { product } from 'src/datatype';


@Component({
  selector: 'app-seller-homepage',
  templateUrl: './seller-homepage.component.html',
  styleUrls: ['./seller-homepage.component.css']
})
export class SellerHomepageComponent implements OnInit {

  addProductMessege:string|undefined;

  constructor(private product: ProductService) { }
  ngOnInit(): void {

  }
  submit(data: product) {
    console.warn(data)
    this.product.addproduct(data).subscribe((result) => {
      console.warn(result);
      if(result){
        this.addProductMessege="Product is Successfully Added"
      }
      setTimeout(()=>this.addProductMessege=undefined,3000);
    });
  }
}
