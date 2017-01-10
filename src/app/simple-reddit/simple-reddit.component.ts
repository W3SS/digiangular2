import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-reddit',
  templateUrl: './simple-reddit.component.html',
  styleUrls: ['./simple-reddit.component.css']
})
export class SimpleRedditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Add article: title: ${title.value} and link: ${link.value}`);
    return false;
  }
}
