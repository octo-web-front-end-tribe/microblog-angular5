import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcb-message',
  templateUrl: './message.component.html',
  styles: []
})
export class MessageComponent implements OnInit {s
  @Input() message;
  
  constructor() { }

  ngOnInit() {
  }

}
