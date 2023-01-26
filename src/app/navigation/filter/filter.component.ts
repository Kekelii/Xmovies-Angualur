import { Component,Output,EventEmitter} from '@angular/core';
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'navigationFilter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    state:boolean= true;
    //creating custom event emitter
    @Output() title =new EventEmitter<string>()
    @Output() date = new EventEmitter<string>()
    constructor(private movies:MoviesService){
      
    }
    dropdown(){
      if(this.state == false){
          this.state= true;
        return
      }
      this.state= false
      
    }
    Date(){
    // console.log(true)
      this.movies.getMovies('Date')
      this.dropdown()
      this.date.emit('date')
    }
    Title(){
      this.movies.getMovies('Title')
      this.title.emit('title')
      this.dropdown()
    }
    
}
