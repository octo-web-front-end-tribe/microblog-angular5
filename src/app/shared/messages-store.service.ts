import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessagesStoreService {

  API_URL = 'http://microblog-api.herokuapp.com/api/messages';

  constructor(private http: HttpClient) { }

  addMessage(message: Message): Observable<Message> {
    return this.http.post<Message>(this.API_URL, message);
  }

  getMessages(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.API_URL);
  }
}
