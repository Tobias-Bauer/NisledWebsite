import {Component, OnDestroy, OnInit} from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-last-posts',
  templateUrl: './lastPosts.component.html',
  styleUrls: ['./lastPosts.component.css']
})
export class LastPostsComponent implements OnInit, OnDestroy {
  inputValue;
  doc;
  isExisting: boolean;
  private authListenerSub: Subscription;
  private serviceSub: Subscription;
  constructor(public postService: PostService, public authService: AuthService) {}

  onAddPost() {
    this.postService.addPost(this.inputValue, 'https://cutlasscabana.com/wp-content/uploads/parser/steve-in-minecraft-1.jpg');
    this.inputValue = '';
  }
  ngOnInit() {
    this.serviceSub = this.postService.getMessageUpdateListener().subscribe((doc: any) => {
      this.doc = doc;
    });
    this.postService.getDoc();
    this.isExisting = this.authService.getAuthStatus();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe( (isAuthenticated: any) => {
      this.isExisting = isAuthenticated;
    });
  }
  ngOnDestroy() {
    this.serviceSub.unsubscribe();
    this.authListenerSub.unsubscribe();
  }
}
