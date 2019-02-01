import { Component } from '@angular/core';

@Component ({
  selector: 'app-community-screen',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})

export class CommunityScreenComponent {
  recentPostsStyle;

  showRecentPosts() {
    this.recentPostsStyle = {
      'visibility': 'visible'
    };
  }
  closeRecentPosts() {
    this.recentPostsStyle = {
      'visibility': 'hidden'
    };
  }
}
