import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { stringify } from '@angular/core/src/util';

@Injectable({ providedIn: 'root' })
export class PostService {
  private doc = '';
  private postsUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getDoc() {
    this.http.get<{documents: any}>('http://192.168.2.30:3000/api/posts').subscribe((data) => {
      this.doc = data.documents;
      this.postsUpdated.next(this.doc);
    });
  }
  getMessageUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPost(content: string, imageUrl: string) {
    this.http.post<{message: string}>('http://192.168.2.30:3000/api/posts', {content, imageUrl}).subscribe(responseData => {
      console.log(responseData.message);
    });
  }
}
