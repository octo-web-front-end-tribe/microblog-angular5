import { TestBed, inject } from '@angular/core/testing';

import { MessagesStoreService } from './messages-store.service';

describe('MessagesStoreService', () => {
  let service: MessagesStoreService;

  beforeEach(() => {
    service = new MessagesStoreService();
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
      let expectedMessages = service.getMessages();
      // then
      expect(expectedMessages).toEqual(service.messages);
    });
  });
});
