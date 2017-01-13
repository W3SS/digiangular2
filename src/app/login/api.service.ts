import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {
  static url: string = 'http://localhost:3000/';
  static KEY: string = 'username';
  private token: string;

  constructor(private http: Http) {
    console.log('ApiService created!');
  }

  login(username: string, password: string, callback?: Function): void {
    console.log(`Calling login API service... for user ${username}`);
    let bodyString = { 'username': username, 'password': password }; // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    this.http.post(ApiService.url + 'authenticate', bodyString, options)
      .subscribe(data => {
        try {
          this.token = JSON.parse(data['_body']).token;
          console.log(`Success ... valid token ${this.token}`);
        } catch (e) {
          console.error('Login token issue: ' + JSON.stringify(e));
          this.token = '';
        }
        sessionStorage.setItem(ApiService.KEY, username);
        if (callback) { callback(true); }
      },
      error => {
        console.error('ERROR login failed ' + JSON.stringify(error));
        let message = '';
        try {
          message = JSON.parse(error['_body']).message;
        } catch (e) {
          message = JSON.stringify(error);
        }
        console.log('ERROR login failed ' + message);
        sessionStorage.removeItem(ApiService.KEY);
        if (callback) { callback(false, message); }
      });
  }

  logout(): void {
    sessionStorage.removeItem(ApiService.KEY);
    console.log('logout ' + sessionStorage.getItem(ApiService.KEY));
  }

  getUser(): string {
    return sessionStorage.getItem(ApiService.KEY);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem(ApiService.KEY) !== null;
  }

}
