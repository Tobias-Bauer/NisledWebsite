import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { renderComponent } from '@angular/core/src/render3';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-acc-manager',
  templateUrl: './accManager.component.html',
  styleUrls: ['./accManager.component.css'],
})
export class AccManagerComponent implements OnInit, OnDestroy {
  isShown;
  accManagerStyle;
  imageStyle;
  authenticated;
  private authListenerSub: Subscription;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authenticated = this.authService.getAuthStatus();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.authenticated = isAuthenticated;
    });
    if (this.router.url.toString() === '/home') {
      this.isShown = true;
    } else {
      this.isShown = false;
    }
    this.render();
  }
  logout() {
    this.authService.logout();
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
  ngOnDestroy() {
    this.authListenerSub.unsubscribe();
  }
}
