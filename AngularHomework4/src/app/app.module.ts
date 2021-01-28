import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserComponent} from './components/all-user-components/user/user.component';
import {UsersComponent} from './components/all-user-components/users/users.component';
import {FullUserComponent} from './components/all-user-components/full-user/full-user.component';
import {PostComponent} from './components/all-posts-components/post/post.component';
import {PostsComponent} from './components/all-posts-components/posts/posts.component';
import {FullPostComponent} from './components/all-posts-components/full-post/full-post.component';
import {RouterModule, Routes} from '@angular/router';
import {UserResolveService} from '../services/user-resolve.service';
import {PostResolveService} from '../services/post-resolve.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {userData: UserResolveService}, children: [{
      path: ':id', component: FullUserComponent
    }]
  },
  {
    path: 'posts', component: PostsComponent, resolve: {postData: PostResolveService}, children: [{
      path: ':id', component: FullPostComponent
    }]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    FullUserComponent,
    PostComponent,
    PostsComponent,
    FullPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
