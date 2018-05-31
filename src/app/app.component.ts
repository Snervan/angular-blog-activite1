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
    content:'Donec quis vestibulum nisi, eu tincidunt odio. Phasellus sed urna sem. Pellentesque in lacus bibendum, finibus est vel, euismod massa.',
    loveIts: 0,
    created_at: Date.now()
  },
  {
    title: 'Mon second post',
    content:'Donec quis vestibulum nisi, eu tincidunt odio. Phasellus sed urna sem. Pellentesque in lacus bibendum, finibus est vel, euismod massa.',
    loveIts: 2,
    created_at: Date.now()
  },
  {
    title: 'Mon troisième post',
    content:'Aenean viverra, quam nec imperdiet hendrerit, metus magna cursus nisi, non suscipit nisi enim id orci. ',
    loveIts: -6,
    created_at: Date.now()
  },];


  constructor(){
  }

}
