import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { renderComponent } from '@angular/core/src/render3';

@Component({
  selector: 'app-acc-manager',
  templateUrl: './accManager.component.html',
  styleUrls: ['./accManager.component.css'],
})
export class AccManagerComponent {
  isShown;
  accManagerStyle;
  imageStyle;
  constructor(private router: Router) {
    if (this.router.url.toString() === '/logIn') {
      this.isShown = false;
    } else {
      this.isShown = true;
    }
    this.render();
  }
  render() {
    if (this.isShown) {
      this.isShown = false;
      this.accManagerStyle = {
        'right': '0px',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
      this.imageStyle = {
        'transform': 'rotateY(360deg)',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
    } else {
      this.isShown = true;
      this.accManagerStyle = {
        'right': '-250px',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
      this.imageStyle = {
        'transform': 'rotateY(180deg)',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
    }
  }
}
