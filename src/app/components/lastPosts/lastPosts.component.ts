import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-last-posts',
  templateUrl: './lastPosts.component.html',
  styleUrls: ['./lastPosts.component.css']
})
export class LastPostsComponent implements OnInit {
  inputValue;
  doc;
  private serviceSub: Subscription;
  constructor(public postService: PostService) {}

  onAddPost() {
    this.postService.addPost(this.inputValue, 'https://cutlasscabana.com/wp-content/uploads/parser/steve-in-minecraft-1.jpg');
    this.inputValue = '';
  }
  ngOnInit() {
    this.postService.getDoc();
    this.serviceSub = this.postService.getMessageUpdateListener().subscribe((doc: any) => {
      this.doc = doc;
    });
  }
}
