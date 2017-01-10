import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { SimpleRedditComponent } from './simple-reddit/simple-reddit.component';
import { HomeComponent } from './home/home.component';

import { NgSemanticModule } from 'ng-semantic';

const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HelloWorldComponent, path: 'hello' },
  { component: UserListComponent, path: 'userlist' },
  { component: SimpleRedditComponent, path: 'simplereddit' }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    SimpleRedditComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
