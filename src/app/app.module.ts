import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { NgSemanticModule } from 'ng-semantic';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { RedditSimpleComponent } from './reddit-simple/reddit-simple.component';
import { HomeComponent } from './home/home.component';
import { RedditArticleComponent } from './reddit-article/reddit-article.component';

const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: HelloWorldComponent, path: 'hello' },
  { component: UserListComponent, path: 'userlist' },
  { component: RedditSimpleComponent, path: 'redditsimple' }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    RedditSimpleComponent,
    HomeComponent,
    RedditArticleComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
