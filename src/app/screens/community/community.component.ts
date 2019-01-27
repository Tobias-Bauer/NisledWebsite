import { Component } from '@angular/core';

@Component ({
  selector: 'app-community-screen',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityScreenComponent {
  recentPostsStyle;
  recentPostsStyleChanged = false;

  showRecentPosts() {
    if (!this.recentPostsStyleChanged) {
      this.recentPostsStyleChanged = true;
      this.recentPostsStyle = {
        'max-height': '100%'};
    } else {
      this.recentPostsStyleChanged = false;
      this.recentPostsStyle = {
        'max-height': '0px'};
    }
  }
}
