
import { Component ,OnInit} from '@angular/core'
import VanillaTilt from 'vanilla-tilt'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void{
    VanillaTilt.init(document.querySelector('.vanillaTilt') as any)
  }

}
