import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [ChatComponent, MessageListComponent, MessageComponent, NewMessageComponent],
  imports: [
    CommonModule
  ]
})
export class NgChatModule { }
