import { TestBed, inject } from '@angular/core/testing';

import { MessagesStoreService } from './messages-store.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('MessagesStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesStoreService],
      imports : [HttpClientTestingModule]
    });
  });

  it('should be created', inject([MessagesStoreService], (service: MessagesStoreService) => {
    expect(service).toBeTruthy();
  }));

  describe('#addMessage', () => {
    it('should post message to the endpoint',
      inject([MessagesStoreService, HttpTestingController],
        (service: MessagesStoreService, backend: HttpTestingController) => {
      // given
      const data = {
        author : 'John',
        content : 'Hello'
      };

      const mockedUrl = service.API_URL;

      // when
      service.addMessage(data).subscribe(res => {
        // then
        expect(res).toBeTruthy();
      });

      const mockedReq = backend.expectOne({method: 'post', url : mockedUrl});
      mockedReq.flush(data);
      backend.verify();
    }));
  });

  describe('#geMessages', () => {
    it('should get list of messages',
      inject([MessagesStoreService, HttpTestingController],
        (service: MessagesStoreService, backend: HttpTestingController) => {
      // given
      const data = [{
        author : 'John',
        content : 'Hello'
      }, {
        author : 'John',
        content : 'Hello2'
      }];

      const mockedUrl = service.API_URL;

      // when
      service.getMessages().subscribe(res => {
        // then
        expect(res).toEqual(data);
      });

      const mockedReq = backend.expectOne({method: 'get', url : mockedUrl});
      mockedReq.flush(data);
      backend.verify();
    }));
  });
});
