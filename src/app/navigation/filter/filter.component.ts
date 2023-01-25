import { Component } from '@angular/core';

@Component({
  selector: 'navigationFilter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent {
    state:boolean= true;

    dropdown(){
      if(this.state == false){
          this.state= true;
        return
      }
      this.state= false
      
    }
    
}
