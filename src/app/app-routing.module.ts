import { Page404Component } from './page404/page404.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { SellerHomepageComponent } from './seller-homepage/seller-homepage.component';
import { SellerComponent } from './seller/seller.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"seller",component:SellerComponent},
  {path:"seller-homepage",component:SellerHomepageComponent},
  { path: "productlist", component: ProductlistComponent },
  { path: "details/:productId", component: ProductDetailsComponent },
  { path: "search/:query", component: SearchComponent },
  { path: "**", component: Page404Component }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
