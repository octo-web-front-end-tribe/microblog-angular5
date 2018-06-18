import { Injectable } from '@angular/core';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';
import { Observable ,  Subject } from 'rxjs';


@Injectable()
export class MessagesStoreService {

  API_URL = 'http://microblog-api.herokuapp.com/api/messages';

  messages: Array<Message> = [
    { author: 'FLM', content: 'I am happy' },
    { author: 'AJU', content: 'Oh really!' }
  ];

  constructor(private http: HttpClient) { }

  addMessage(message: Message): void {
    this.http.post<Message>(this.API_URL, message).subscribe(() => {
      this.messages.push(message);
    });
  }

  fetchMessages(): void {
    this.http.get(this.API_URL).subscribe((messages: Array<Message>) => {
      this.messages = messages;
    });
  }

}
