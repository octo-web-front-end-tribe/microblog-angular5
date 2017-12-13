import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagesStoreService } from '../shared/messages-store.service';
import { Observable } from 'rxjs/Observable';
import { Message } from '../shared/message';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;
  let messageStoreService: MessagesStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MessageItemComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [MessagesStoreService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    messageStoreService = TestBed.get(MessagesStoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should get the message from the service', () => {
      // given
      spyOn(messageStoreService, 'getMessages').and.returnValue(Observable.of());
      // when
      component.ngOnInit();
      // then
      expect(messageStoreService.getMessages).toHaveBeenCalled();
    });

    it('should set message list with service returned messages', () => {
      // given
      const data = [{ author: 'John Doe', content: 'Hello' }];
      spyOn(messageStoreService, 'getMessages')
        .and.returnValue(Observable.of(data));
      // when
      component.ngOnInit();

      // then
      expect(component.messages).toEqual(data);
    });


  });


});
