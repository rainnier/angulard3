import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogs:Blog[] = [
    {
      title: "Mukbang",
      description: "eating much much"
    },
    {
      title: "Wala akong maisip",
      description: "..."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
