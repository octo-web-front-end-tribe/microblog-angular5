import { Component, OnInit } from '@angular/core';
import { MessagesStoreService } from '../shared/messages-store.service';

@Component({
  selector: 'mcb-message-input',
  templateUrl: './message-input.component.html',
  styles: []
})
export class MessageInputComponent implements OnInit {

  textMessage: string;

  constructor(private messagesStoreService: MessagesStoreService) { }

  ngOnInit() {
  }

  addMessage(): void {
    this.messagesStoreService.addMessage({
      author: 'John',
      content: this.textMessage
     }).subscribe(() => {
      this.textMessage = '';
     });

  }

}
