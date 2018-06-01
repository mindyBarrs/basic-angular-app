import { Component } from '@angular/core';
import {PostService} from './services/post.service';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent {
  posts: Post[];

  constructor(private _postService: PostService) {
    this._postService.getPosts().then(posts => {
      this.posts = posts;
    });
  }
}
