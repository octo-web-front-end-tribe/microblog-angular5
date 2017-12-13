import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MessageInputComponent } from './message-input.component';
import { MessagesStoreService } from '../shared/messages-store.service';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;
  let service: MessagesStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ],
      imports: [FormsModule],
      providers: [MessagesStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(MessagesStoreService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#addMessage', () => {
    it('should post new message using the message-store service', () => {
        // given
        spyOn(service, 'addMessage').and.stub;
        component.textMessage = 'blabla';
        // when
        component.addMessage();
        // then
        expect(service.addMessage).toHaveBeenCalledWith({ author: 'John', content: 'blabla' });
    });

    it('should reset textMessage attribute', () => {
        // given
        component.textMessage = 'fake message';
        // when
        component.addMessage();
        // then
        expect(component.textMessage).toEqual('');
    });
  });
});
