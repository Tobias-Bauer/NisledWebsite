import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../components/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {
  title = 'nisledWebsite';
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
