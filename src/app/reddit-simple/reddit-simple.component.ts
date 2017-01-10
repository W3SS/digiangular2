import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RedditArticle } from '../reddit-article/reddit-article.model';

@Component({
  selector: 'app-reddit-simple',
  templateUrl: './reddit-simple.component.html',
  styleUrls: ['./reddit-simple.component.css']
})
export class RedditSimpleComponent implements OnInit {
  articles: RedditArticle[] = [];

  form: FormGroup;
  formFeedback: FormGroup;
  formSubmited: boolean = false;


  constructor(fb: FormBuilder) {
    this.articles.push(new RedditArticle('SemanticUI', 'http://semantic-ui.com'));
    this.articles.push(new RedditArticle('Learn Angular2', 'http://learnangular2.com', 3));

    this.form = fb.group({
      titleControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      linkControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  ngOnInit() {
  }

  addArticle() {
    this.formSubmited = true;
    console.log(`Add article: ${JSON.stringify(this.form.value)}`);
    this.articles.push(new RedditArticle(this.form.value['titleControl'], this.form.value['linkControl']));

    this.form.reset();

    this.formSubmited = false;
    return false;
  }
}
