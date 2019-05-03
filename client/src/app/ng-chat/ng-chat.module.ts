import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ChatComponent } from './components/chat/chat.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessageComponent } from './components/message/message.component';
import { NewMessageComponent } from './components/new-message/new-message.component';

@NgModule({
  declarations: [
    ChatComponent,
    MessageListComponent,
    MessageComponent,
    NewMessageComponent
  ],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
  exports: [ChatComponent]
})
export class NgChatModule {}
