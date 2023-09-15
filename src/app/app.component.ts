import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArezkiLouisTP1';
  public color: string = '';
  
  public addItem(newItem: string){
    this.color = newItem;
    this.changeBgColor(this.color);
  }
  private changeBgColor(color : string){
    document.body.style.backgroundColor = color;
  }
  protected colorsArray= ["red","green","blue","yellow"];
}
