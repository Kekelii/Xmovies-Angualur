import { Component,Input } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  list:{id:number,date:string,name:string,genre:string}[]| undefined | null


  constructor(private movieService:MoviesService){

  }

  getMovies(){
  this.list = this.movieService.getMovies();
  console.log('come')
} 
ngOnInit(){
  this.getMovies()
}
}
