import { Component, OnInit } from '@angular/core';
import { RedditArticle } from '../reddit-article/reddit-article.model';

@Component({
  selector: 'app-reddit-simple',
  templateUrl: './reddit-simple.component.html',
  styleUrls: ['./reddit-simple.component.css']
})
export class RedditSimpleComponent implements OnInit {
  articles: RedditArticle[] = [];

  constructor() {
    this.articles.push(new RedditArticle('SemanticUI', 'http://semantic-ui.com'));
    this.articles.push(new RedditArticle('Learn Angular2', 'http://learnangular2.com', 3));
  }

  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
    console.log(`Add article: title: ${title.value} and link: ${link.value}`);
    this.articles.push(new RedditArticle(title.value, link.value));

    title.value = '';
    link.value = '';
    
    return false;
  }
}
