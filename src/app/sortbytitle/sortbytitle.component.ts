import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-sortbytitle',
  templateUrl: './sortbytitle.component.html',
  styleUrls: ['./sortbytitle.component.css']
})
export class SortbytitleComponent {
  list:{id:number,date:string,name:string,genre:string}[]| undefined | null


  constructor(private movieService:MoviesService){

  }

  getMovies(){
  this.list = this.movieService.getMovies('Title');
  console.log(this.list) 
} 
ngOnInit(){
  this.getMovies()
}
}
