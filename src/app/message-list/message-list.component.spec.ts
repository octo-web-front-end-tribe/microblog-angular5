import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessageComponent } from '../message/message.component';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MessageListComponent,
        MessageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#ngOnInit', () => {
    it('should set property messages with default', () => {
      // given
      component.messages = undefined;
      // when
      component.ngOnInit();
      // then
      expect(component.messages).toEqual([
        { author: 'FLM', content: 'I am happy'},
        { author: 'AJU', content: 'Oh really!'}
      ]);
    });
  });


});
