import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {

  @Input() blog:Blog | undefined;
  @Input() ind:number | undefined;
  @Output() loveEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendLove() {
    this.loveEmitter.emit(this.blog)
  }

}
