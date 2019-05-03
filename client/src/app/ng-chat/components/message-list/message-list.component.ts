import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message.interface';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat
      .getMessages()
      .pipe(tap(m => console.log(m)))
      .subscribe(message => this.messages.push(message));
  }
}
