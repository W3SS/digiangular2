import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
  static url: string = 'https://jsonplaceholder.typicode.com/photos';
  static urlError: string = 'https://news.google.com';

  constructor(private http: Http) {
    console.log('ApiService created!');
  }

  login(username: string, password: string, callback?: Function) {
    console.log(`Calling login API service... for user ${username}`);
    this.http.get(ApiService.url)
      .subscribe(data => {
        console.log('Success');
        if (callback) { callback(true); }
      },
      error => {
        console.error('ERROR login failed');
        if (callback) { callback(false); }
      });
  }

}
