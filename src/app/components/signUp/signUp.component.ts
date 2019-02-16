import { Component } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class CSignUpComponent {
  email = null;
  password = null;
  constructor(public authService: AuthService) {}
  onSignup() {
    if (this.password != null && this.email != null) {
      this.authService.createUser(this.email, this.password);
    }
  }
}
