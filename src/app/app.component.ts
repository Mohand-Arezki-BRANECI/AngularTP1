import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArezkiLouisTP1';
  public changeColor: string = '';
  
  public addItem(newItem: string){
    this.changeColor = newItem;
  }
  protected colorsArray= ["red","green","blue","yellow"];
}
