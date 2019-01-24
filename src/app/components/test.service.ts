import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewService {
  private news = '';
  private newsUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getMessage() {
    this.http.get<{message: string, news: string}>('http://localhost:3000/api/news').subscribe((data) => {
      this.news = data.message;
      this.newsUpdated.next(this.news);
    });
  }
  getMessageUpdateListener() {
    return this.newsUpdated.asObservable();
  }
}
