import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  public value = '';

  constructor(private chat: ChatService) {}

  submit() {
    this.chat.send(this.value);
    this.value = '';
  }
}
