import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-sorted-by-date',
  templateUrl: './sorted-by-date.component.html',
  styleUrls: ['./sorted-by-date.component.css']
})
export class SortedByDateComponent {
  list:{id:number,date:string,name:string,genre:string}[]| undefined | null


  constructor(private movieService:MoviesService){

  }

  getMovies(){
  this.list = this.movieService.getMovies('Date');
  console.log('come')
} 
ngOnInit(){
  this.getMovies()
}
}
