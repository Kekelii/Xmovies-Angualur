import { Component} from '@angular/core';
import { MoviesService } from './movies.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent  {


  constructor(private movies:MoviesService){}


  bob(){
    console.log('bob')
    
  }

  date(){
    console.log('date from app')
  }
}
