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
    service = fixture.debugElement.injector.get(MessagesStoreService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  describe('#addMessage', () => {

    beforeEach(() => {
      spyOn(service, 'addMessage').and.stub;
    });

    it('should post new message using the messages-store service', () => {
      // given
      component.textMessage = 'Fake test message';
      // when
      component.addMessage();
      // then
      expect(service.addMessage).toHaveBeenCalledWith({author: 'John', content: 'Fake test message'});
    }); 
    
    it('should reset textMessage attribute', () => {
      // given
      component.textMessage = 'Fake test message';
      // when
      component.addMessage();
      // then
      expect(component.textMessage).toEqual('');
    }); 
  });
});
