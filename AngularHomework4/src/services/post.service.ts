import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BASE_URL} from '../settings/baseUrl';
import {Post} from '../models/post-models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(BASE_URL + '/posts');
  }
}
