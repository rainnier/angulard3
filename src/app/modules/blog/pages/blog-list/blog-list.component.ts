import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  num:number = 0;
  nums:number[] = [2, 3, 1, 7, 2]
  blogs:Blog[] = [
    {
      title: "Mukbang",
      description: "eating much much",
      published: false,
      authorActive: true
    },
    {
      title: "Wala akong maisip",
      description: "...",
      published: true,
      authorActive:true
    },
    {
      title: "Kahit ano",
      description: "anything under the sun",
      published: true,
      authorActive:false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  loveAction(blog:Blog) {
    console.log(blog);
  }

  incrementNum() {
    this.num++;
  }
}
