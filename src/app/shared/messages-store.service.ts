import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesStoreService {

  messages: Array<Message> = [];

  constructor() { }

  addMessage(message: Message): void {
      this.messages.push(message);
  }

}
