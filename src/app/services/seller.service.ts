import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
 isSellerLoggedIn=new BehaviorSubject<boolean>(false);


  constructor(private http: HttpClient ,private Router:Router) { }


  userSignUp(data:object){
    this.http.post('http://localhost:3000/seller',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('seller',JSON.stringify(result.body))
        this.Router.navigate(['seller-homepage'])
      }
    })
  }
  reloadseller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true)
      this.Router.navigate(['seller-homepage'])
    }
  }


  userLogin(data:object){
    console.warn(data)
  }

 
}
