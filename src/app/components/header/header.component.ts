import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuIcon = 'menu';
  mobileMenuStyle;
  svg1;
  svg2;
  styleTopBar = {};
  styleHeaderComponent = {};
  styleTopBarScrolledData = {
    'background-color': 'rgba(0, 0, 0, 0.8)',
    'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'};
  constructor(private router: Router) {}

  ngOnInit() {
    window.addEventListener('scroll', this.handleScroll);
    if (this.router.url.toString() === '/logIn') {
      this.styleTopBar = this.styleTopBarScrolledData;
      this.styleHeaderComponent = {'margin-top': '-20px'};
    }
  }
  handleScroll = (): void => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.styleTopBar = this.styleTopBarScrolledData;
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
  changeIcon() {
    if (this.menuIcon !== 'close') {
      this.menuIcon = 'close';
      this.svg1 = {
        'position': 'absolute',
        'transform': 'rotateZ(45deg)'};
      this.svg2 = {
        'position': 'absolute',
        'transform': 'rotateZ(-45deg)'};
    } else {
      this.svg1 = {
        'position': 'relative',
        'transform': 'rotateZ(0deg)'};
      this.svg2 = {
        'position': 'relative',
        'transform': 'rotateZ(0deg)'};
      this.menuIcon = 'menu';
    }
  }
  changeMobileMenuStyle() {
    if (this.menuIcon === 'menu') {
      this.mobileMenuStyle = {
        'max-height': '100%'};
    } else {
      this.mobileMenuStyle = {
        'max-height': '0px',
        'transition': '.5s cubic-bezier(0.1, 0.8, 0.2, 1)'};
    }
  }
}
