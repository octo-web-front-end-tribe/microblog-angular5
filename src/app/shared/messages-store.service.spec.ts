import { TestBed, inject } from '@angular/core/testing';
import { MessagesStoreService } from './messages-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Message } from './message';

describe('MessagesStoreService', () => {
  let httpStub;
  let service: MessagesStoreService;

  beforeEach(() => {
    httpStub = {
      get: () => {
        return Observable.of([{ id: 1, content: 'hello', author: 'John' }]);
      },
      post: (message: Message) => {
        return Observable.of(message);
      }
    };
    service = new MessagesStoreService(httpStub);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set messages proptery set with empty array', () => {
    expect(service.messages).toEqual([
      { author: 'FLM', content: 'I am happy' },
      { author: 'AJU', content: 'Oh really!' }
    ]);
  });

  describe('#addMessage', () => {
    it('should add message param to messages list', () => {
      // given
      service.messages = [];
      // when
      service.addMessage({ author: 'Johny', content: 'Goodbye Johny!' });
      // then
      expect(service.messages).toContain({ author: 'Johny', content: 'Goodbye Johny!' });
    });
  });

  describe('#getMessages', () => {
    it('should return messages attribute reference', () => {
      // given
      service.messages = [];
      // when
      service.fetchMessages();
      // then
      expect(service.messages).toEqual([{ id: 1, content: 'hello', author: 'John' }]);
    });
  });
});
