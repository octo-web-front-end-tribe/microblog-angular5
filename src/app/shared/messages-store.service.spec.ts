import { TestBed, inject } from '@angular/core/testing';

import { MessagesStoreService } from './messages-store.service';

describe('MessagesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesStoreService]
    });
  });

  it('should be created', inject([MessagesStoreService], (service: MessagesStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('should set messages property with empty empty array', inject([MessagesStoreService], (service: MessagesStoreService) => {
    expect(service.messages).toEqual([]);
  }));

  describe('#addMessage', () => {
    it('should be created', inject([MessagesStoreService], (service: MessagesStoreService) => {
      // given
      service.messages = [];
      // when
      service.addMessage({ author: 'John', content: 'blabla'});
      // then
      expect(service.messages).toContain({ author: 'John', content: 'blabla'});
    }));
  });
});;
