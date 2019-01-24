import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc-manager',
  templateUrl: './accManager.component.html',
  styleUrls: ['./accManager.component.css'],
})
export class AccManagerComponent {
  ishiden = false;
  accManagerStyle;
  imageStyle;
  constructor(private router: Router) {}

  navSignUp() {
    this.router.navigate(['signUp']);
  }

  iconPressed() {
    if (this.ishiden) {
      this.ishiden = false;
      this.accManagerStyle = {
        'right': '0px',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
      this.imageStyle = {
        'transform': 'rotateY(360deg)',
        'transition': '0.8s cubic-bezier(0.2, 0.8, 0.2, 1)'
      };
    } else {
      this.ishiden = true;
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