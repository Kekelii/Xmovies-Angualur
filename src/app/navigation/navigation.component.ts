import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'Navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
@Output() title = new EventEmitter<string>()
@Output() date = new EventEmitter<string>()

  titleEmit(){
    this.title.emit('title')
    console.log('bob from navigation')
  }

  dateEmit(){
    this.date.emit('date')
    console.log('date from navigation')
  }

}
