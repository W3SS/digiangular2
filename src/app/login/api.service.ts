import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ApiService {
  static url: string = 'https://jsonplaceholder.typicode.com/photos';
  static urlError: string = 'https://news.google.com';
  static KEY: string = 'username';

  constructor(private http: Http) {
    console.log('ApiService created!');
  }

  login(username: string, password: string, callback?: Function) {
    console.log(`Calling login API service... for user ${username}`);
    this.http.get(ApiService.url)
      .subscribe(data => {
        console.log('Success');
        // To simulate a long process
        setTimeout(function () {
          sessionStorage.setItem(ApiService.KEY, username);
          if (callback) { callback(true); }
        }.bind(this), 2000);
      },
      error => {
        console.error('ERROR login failed');
        sessionStorage.removeItem(ApiService.KEY);
        if (callback) { callback(false); }
      });
  }

  logout() {
    sessionStorage.removeItem(ApiService.KEY);
    console.log('logout ' + sessionStorage.getItem(ApiService.KEY));
  }

  isLoggedIn() {
    return sessionStorage.getItem(ApiService.KEY) !== null;
  }

}
