import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcb-message-input',
  templateUrl: './message-input.component.html',
  styles: []
})
export class MessageInputComponent implements OnInit {

  textMessage: string;

  constructor() { }

  ngOnInit() {
  }

  addMessage(): void {
  }

}
