import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcb-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {

  @Input() author: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
    this.author = this.author || 'John';
    this.message = this.message || 'Hello world';
  }

}
