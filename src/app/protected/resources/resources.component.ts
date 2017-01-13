import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../login/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  constructor(public api: ApiService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.api.logout();
    this.router.navigate(['/login']);
  }
}
