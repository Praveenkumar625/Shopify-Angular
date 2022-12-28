import { product } from './../../datatype';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
// import { dbJson } from 'db.json';




@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {


  dataSource! :MatTableDataSource<product>
  posts:any

  productList: any | product[];
  productMessege: undefined | string;
  icon = faTrash;

  Users: any;
  allUsers: number = 0;
  pagination: number = 1;
  // item: product[] =dbJson;

  constructor(private product: ProductService) {
    this.product.getData().subscribe((data) => {
      console.log(data);
      this.posts= data
      this.dataSource =new MatTableDataSource(this.posts)
    })
  }


  // totalLength: any;
  // page: number = 1;

  // showpost: any = [];



  ngOnInit(): void {
    this.list();
  }


  // , this.product.getpost().subscribe((result) => {
  //   this.showpost = result;
  //   this.totalLength = result.length;
  //   console.log(this.showpost)
  // });



  deleteProduct(id: number) {
    console.warn("test id", id)
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessege = "Product is Deleted"
        this.list()
      }
    })
    setTimeout(() => {
      this.productMessege = undefined
    }, 3000);
  }

  list(){
    this.product.productList().subscribe((result) => {
      console.warn(result);
      if(result){
      this.productList = result;

  }



})

}
renderpage(event:number){
this.pagination=event
this.list();
}


}
