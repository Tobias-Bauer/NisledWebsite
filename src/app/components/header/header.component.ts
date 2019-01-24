import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  styleTopBar = {};
  styleHeaderComponent = {};

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = (): void => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.styleTopBar = {
      'background-color': 'rgba(0, 0, 0, 0.8)',
      'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'};
      this.styleHeaderComponent = {
      'padding-top': '20px',
      'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'};
    } else {
      this.styleTopBar = {
      'background-color': 'transparent',
      'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'};
      this.styleHeaderComponent = {
      'padding-top': '50px',
      'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'};
    }
  }
}
