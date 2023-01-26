import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'Findmovie',
  templateUrl: './findmovie.component.html',
  styleUrls: ['./findmovie.component.css']
})
/* The class has a property called list which is an array of objects. Each object has an id, date, name
and genre. The list property is initialized to undefined */
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
