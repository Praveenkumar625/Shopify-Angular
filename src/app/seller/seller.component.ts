import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, } from '@angular/forms';



@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  loginForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  constructor(private seller: SellerService, private router: Router) { }

  showLogin = false

  ngOnInit(): void { }

  SignUp(data: object): void {
    console.warn(data)
    this.seller.userSignUp(data)
    // console.warn(this.loginForm.value)
  }

  get user() {
    return this.loginForm.get('user');
  }

  get password() {
    return this.loginForm.get('password');
  }



  login(data: object): void {
    console.warn(data)
  }
  
  openLogin(){
    this.showLogin = true
  }
  openSignUp(){
    this.showLogin = false
  }


}
