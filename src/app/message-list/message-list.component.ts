import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message';
import { MessagesStoreService } from '../shared/messages-store.service';

@Component({
  selector: 'mcb-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {
  
  constructor(public messagesStoreService: MessagesStoreService) { }

  ngOnInit() {
    this.messagesStoreService.fetchMessages();
  }

}
