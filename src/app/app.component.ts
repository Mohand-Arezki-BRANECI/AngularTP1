import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArezkiTP1';
  public color: string = '';
  
  public addItem(newItem: string){
    this.color = newItem;
    console.log(this.color);
    this.changeBgColor(this.color);
  }
  private changeBgColor(color : string){
    document.body.style.backgroundColor = color;
  }
  protected colorsArray= ["red","green","blue","yellow"];
}
