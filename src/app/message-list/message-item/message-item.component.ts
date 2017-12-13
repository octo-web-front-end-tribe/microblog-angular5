import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mcb-message-item',
  templateUrl: './message-item.component.html',
  styles: []
})
export class MessageItemComponent implements OnInit {s;
  @Input() message;

  constructor() { }

  ngOnInit() {
  }

}
