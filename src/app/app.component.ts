import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pruebaCRUD';
  preload:boolean= true;

  ngOnInit():void {
    setTimeout(() => {
      this.preload = false;
    }, 1500);
  }
}
