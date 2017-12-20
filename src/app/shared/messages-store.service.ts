import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesStoreService {

  messages: Array<Message> = [
    { author: 'FLM', content: 'I am happy' },
    { author: 'AJU', content: 'Oh really!' }
  ];

  constructor() { }

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  getMessages(): Array<Message> {
    return this.messages;
  }

}
