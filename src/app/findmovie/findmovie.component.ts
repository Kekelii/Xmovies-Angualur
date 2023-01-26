import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'Findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
export class FindmovieComponent {
    list:{id:number,date:string,name:string,genre:string}[]| undefined |null


  constructor(private movieService:MoviesService){

  }

  getMovies(){

  this.list = this.movieService.getMovies();
}
ngOnInit(){
  this.getMovies()
}
}
