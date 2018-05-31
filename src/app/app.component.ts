import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  Posts = [
  {
    title: 'Mon premier post',
    content:'Lorem ipsum dolor sit amet',
    loveIts: 0,
    created_at: Date.now()
  }];


  constructor(){
  }

}
