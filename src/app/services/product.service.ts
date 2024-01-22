import { Injectable } from '@angular/core';
import { product } from 'src/datatype';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseURL = 'http://localhost:3000/product';


  constructor(private http: HttpClient, private Router: Router) { }

  addproduct(data: product) {
    return this.http.post('http://localhost:3000/product', data);
  }
  productList() {
    return this.http.get<product[]>('http://localhost:3000/product');
  }

  deleteProduct(id: number) {
    return  this.http.delete(`http://localhost:3000/product/${id}`)
  }

  getpost(): Observable<any> {
    const url = 'http://localhost:3000/product'
    return this.http.get<any>(url)
  }


  getProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/product/${id}`);
  }


  getUsers(page: number) {
    return this.http.get(this.baseURL + '?_page=' + page);
  }
  searchProduct(query: string) {
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`);
  }

  getData(){
    return this.http.get(this.baseURL);
  }

  trendyProducts(){
    return this.http.get<product[]>("http://localhost:3000/product?_limit=9");
  }
}

