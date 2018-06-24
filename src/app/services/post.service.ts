import { Injectable } from '@angular/core';
// import {POSTS} from '../mock-posts';
import { Post } from '../post';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()

export class PostService {
    constructor(private _http: Http) {

    }

    getPosts() {
        return this._http.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .pipe(map(res => res.json()));
    }

    addPost(post: any) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('https://jsonplaceholder.typicode.com/posts', post, {headers: headers})
        .pipe(map(res => res.json()));
    }
}

