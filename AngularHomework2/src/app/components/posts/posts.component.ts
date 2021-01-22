import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  chosenPost: Post;

  constructor(private postService: PostsService) {
  }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  getChosenPost(data): void {
    this.chosenPost = data;
  }
}
