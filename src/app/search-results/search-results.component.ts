import { Component } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
}) 
export class SearchResultsComponent {
  list:{id:number,date:string,name:string,genre:string}[]| undefined | null


  constructor(private movieService:MoviesService,private router:ActivatedRoute){

  }

  getMovies(){
  this.list = this.movieService.getMovies('Title');
  console.log(this.list) 
} 
ngOnInit(){
  let name:any = this.router.snapshot.paramMap.get('item')
  this.list = this.movieService.searchMovie(name) as any
}
}
