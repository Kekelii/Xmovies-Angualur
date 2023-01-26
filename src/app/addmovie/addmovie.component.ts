import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MoviesService } from '../movies.service';

 
@Component({
  selector: 'Addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']  
})
/* It's a class that has a constructor that takes in a service as a parameter, and then it has a method
that takes in a form and then uses the service to add a movie. */
export class AddmovieComponent { 


  constructor(private movies:MoviesService){

  }
addmovie = new FormGroup({
  name:new FormControl(),
  released:new FormControl(),
  category:new FormControl()
})
onSubmit(){
  
  let data = this.addmovie.value
  this.movies.addMovies({name:data.name,genre:data.category,date:data.released})
  alert('new Movie added')
  this.addmovie.reset()
}
cancel(){
 this.addmovie.reset()
}
    
}


