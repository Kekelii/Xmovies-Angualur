import { Component,Input,OnInit  } from '@angular/core';

@Component({
  selector: 'Movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() id:number | undefined;
  @Input() Tittle :string|undefined;
  @Input() Date:string | undefined;
  @Input() Gerne:string|undefined; 

  state:boolean=false

  editMovie(){
      console.log(this.id)
  }

  deleteMovie(){
    if(this.id)
    localStorage.removeItem(this.id.toString())
    this.state=true
  }
ngOnInit(){
  
}
}
