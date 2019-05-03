import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];

  constructor() {}

  ngOnInit() {}
}
