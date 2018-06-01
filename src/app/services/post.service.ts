import { Injectable } from '@angular/core';
import {POSTS} from '../mock-posts';
import {Post} from '../Post';

@Injectable()

export class PostService {
    getPosts(): Promise<Post[]> {
        return Promise.resolve(POSTS);
    }
}

