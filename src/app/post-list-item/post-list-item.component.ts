import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() postTitle : string;
  @Input() postContent: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  loveItPlus(){
  	this.loveIts++;
  }

  loveItLess(){
  	this.loveIts--;
  }

}
