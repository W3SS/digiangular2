import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  formSubmited: boolean = false;
  message: string = '';
  messageClass: string;

  constructor(fb: FormBuilder, public api: ApiService, private router: Router) {

    this.form = fb.group({
      nameControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordControl: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });

  }

  ngOnInit() {
  }

  submit() {
    console.log(this.form.value['passwordControl']);
    this.formSubmited = true;
    this.api.login(this.form.value['nameControl'], this.form.value['passwordControl'], (success: boolean, message: string) => {
      this.formSubmited = false;
      this.messageClass = success ? 'positive' : 'negative';
      this.message = success ? 'Success! You logged in' : message;
      if (success) {
        this.router.navigate(['/protected/resources']);
      }
    });
  }

  logout() {
    this.api.logout();
  }
}
