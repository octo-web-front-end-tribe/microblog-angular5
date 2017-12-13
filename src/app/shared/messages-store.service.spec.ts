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
});
