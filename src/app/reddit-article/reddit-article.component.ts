import { Component, OnInit, Input } from '@angular/core';
import { RedditArticle } from './reddit-article.model';

@Component({
  selector: 'app-reddit-article',
  templateUrl: './reddit-article.component.html',
  styleUrls: ['./reddit-article.component.css']
})
export class RedditArticleComponent implements OnInit {
  @Input() article: RedditArticle;

  constructor() {
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();

    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();

    return false;
  }

}
