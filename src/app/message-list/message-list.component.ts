import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message';

@Component({
  selector: 'mcb-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {

  messages: Array<Message>;

  constructor() { }

  ngOnInit() {
    this.messages = [
      { author: 'FLM', content: 'I am happy'},
      { author: 'AJU', content: 'Oh really!'}
    ];
  }

}
