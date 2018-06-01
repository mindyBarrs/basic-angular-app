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
  // These Properties
  posts: Post[];
  title: string;
  body: string;

  constructor(private _postService: PostService) {
    this._postService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  addPost() {
    const newPost = {
      title: this.title,
      body: this.body
    };

    this._postService.addPost(newPost).subscribe(post => {
      this.posts.push(post);
      console.log('A new post has been added');
    });
    return false;
  }
}
