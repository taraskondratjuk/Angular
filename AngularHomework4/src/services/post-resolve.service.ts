import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {PostService} from './post.service';
import {Observable} from 'rxjs';
import {Post} from '../models/post-models/post';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<Post[]> {

  constructor(private postService: PostService) {
  }

  resolve(): Observable<Post[]> | Promise<Post[]> | Post[] {
    return this.postService.getAllPosts();
  }
}
