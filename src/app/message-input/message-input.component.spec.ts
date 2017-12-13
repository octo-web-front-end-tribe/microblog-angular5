import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MessageInputComponent } from './message-input.component';
import { MessagesStoreService } from '../shared/messages-store.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;
  let service: MessagesStoreService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ],
      imports: [FormsModule, HttpClientTestingModule],
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
    it('should post new message using the message-store service', () => {
        // given
        spyOn(service, 'addMessage').and.returnValue(Observable.of());
        component.textMessage = 'blabla';
        // when
        component.addMessage();
        // then
        expect(service.addMessage).toHaveBeenCalledWith({ author: 'John', content: 'blabla' });
    });

    xit('should reset textMessage attribute', () => {
        // given
        spyOn(service, 'addMessage').and.returnValue(Observable.of());
        component.textMessage = 'fake message';
        // when
        component.addMessage();
        fixture.detectChanges();
        // then 
        expect(component.textMessage).toEqual('');
        
    });
  });
});
