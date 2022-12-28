import { product } from './../../datatype';
import { Component,OnInit} from '@angular/core';
import VanillaTilt from 'vanilla-tilt'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{


  trendyProducts:undefined | product[];

  constructor(private product:ProductService) {}

  ngOnInit(): void {
    this.product.trendyProducts().subscribe((data)=>{
      this.trendyProducts=data;
    });
    {
      VanillaTilt.init(document.querySelector('.pro') as any)
    }
 }

 

  
}



// ngOnInit(): void{
//   VanillaTilt.init(document.querySelector('.newsl') as any)
// }
