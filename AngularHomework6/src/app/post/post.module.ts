import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PostRoutingModule} from './post-routing.module';
import {PostComponent} from './components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {FullPostComponent} from './components/full-post/full-post.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './services/post.service';


@NgModule({
  declarations: [PostComponent, PostsComponent, FullPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule {
}
