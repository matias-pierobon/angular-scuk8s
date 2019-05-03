import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../models/message.interface';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private ws: WebSocket;
  private messages: BehaviorSubject<Message> = new BehaviorSubject(null);
  private users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor() {
    this.ws = new WebSocket(environment.url);
    this.ws.onmessage = event => {
      const payload = event.data;
      const message = JSON.parse(payload) as Message;
      this.onMessage(message);
    };
  }

  public send(message: string) {
    this.ws.send(message);
  }

  public getMessages() {
    this.messages.asObservable();
  }

  public getUsers() {
    this.users.asObservable();
  }

  private onMessage(message: Message) {
    switch (message.type) {
      case 'CONNECT':
        this.users.next([...this.users.value, message.user]);
        break;
      case 'DISCONNECT':
        this.users.next(
          this.users.value.filter(user => user.name !== message.user.name)
        );
        break;
      case 'NEW_MESSAGE':
        this.messages.next(message);
        break;
    }
  }
}
