import { Component ,OnInit} from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { MoviesService } from '../movies.service';
import { ActivatedRoute ,Router} from '@angular/router';
@Component({
  selector: 'Edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})


/* It's a component that allows you to edit a movie */
export class EditMovieComponent {
  itemId: any;
  dbref:any;
  name:string | undefined
  released:string | undefined
  genre:string| undefined


  constructor(private movie:MoviesService,private route:ActivatedRoute,private router:Router){
    this.itemId = this.route.snapshot.paramMap.get('id')
    this.dbref = JSON.parse(localStorage.getItem(this.itemId.toString()) as string)


  }


ngOnInit(){
  this.editmovie.setValue({
    name:this.dbref.name,
    released:this.dbref.date,
    category:this.dbref.genre
  })
}

  editmovie= new FormGroup({
    name:new FormControl(),
    category: new FormControl(),
    released:new FormControl()
  })

  save(){

    let data = this.editmovie.value
    let revisedData:any= {id:this.itemId}
    let key = Object.keys(data);

   revisedData.name=data.name
   revisedData.date=data.released
   revisedData.genre=data.category
    localStorage.setItem(this.itemId.toString(),JSON.stringify(revisedData))
    alert('updated')
    
    this.router.navigateByUrl('/')
  }
}
