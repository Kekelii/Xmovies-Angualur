import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private router:Router){}
  searchmovie = new FormGroup({
    name:new FormControl(),
  })


  OnSubmit(){
      this.router.navigateByUrl('search/'+this.searchmovie.value.name);
    console.log(this.searchmovie.value)
  }
}
