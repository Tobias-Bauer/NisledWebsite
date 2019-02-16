import { Component } from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './logIn.component.html',
  styleUrls: ['./logIn.component.css']
})
export class CLogInComponent {
  constructor(public authService: AuthService) {}
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(form.value.email, form.value.password);
  }
}
