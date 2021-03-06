import { Component, Input } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-post-card',
  styleUrls: ['postCard.component.css'],
  template: `
  <div id="card">
    <div id="cover" [ngStyle]="{'background-image': 'url(' + imageUrl + ')'}"></div>
    <p>{{post}}</p>
  </div>`
})
export class PostCardComponent {
  @Input() imageUrl: string;
  // tslint:disable-next-line:no-input-rename
  @Input('content') post: string;
}
