import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagesStoreService } from '../shared/messages-store.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;
  let service: MessagesStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MessageItemComponent
      ],
      providers: [MessagesStoreService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(MessagesStoreService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {

    it('should fetch messages using message-store-service', () => {
      // given
      spyOn(service, 'fetchMessages').and.stub;
      // when
      component.ngOnInit();
      // then
      expect(service.fetchMessages).toHaveBeenCalled();
    });
  });


});
