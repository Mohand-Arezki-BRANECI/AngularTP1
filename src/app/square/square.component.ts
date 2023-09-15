import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent {
  @Input() bgColor : string = "";
  
  @Output() addEventEvent:EventEmitter<string> = new EventEmitter<string>();

  public addEvent(value : string){
    this.addEventEvent.emit(value);
  }
}
