import { Component, OnInit } from '@angular/core';
import { NewService } from '../test.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.css']
})
export class Section1Component implements OnInit {
  private serviceSub: Subscription;
  news = 'Not loaded yet';
  constructor(public newsService: NewService) {}

  ngOnInit() {
    this.newsService.getMessage();
    this.serviceSub = this.newsService.getMessageUpdateListener().subscribe((news: any) => {
      this.news = news;
    });
  }
}
