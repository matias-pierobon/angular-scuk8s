import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message.interface';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private ws: WebSocket;
  private messages: Subject<Message> = new Subject();
  private users: BehaviorSubject<User[]> = new BehaviorSubject([]);

  constructor() {
    this.ws = new WebSocket(environment.url);
    this.ws.onmessage = (e: MessageEvent) => {
      const payload = e.data;
      const message = JSON.parse(payload) as Message;
      this.onMessage(message);
    };
  }

  public getUsers() {
    return this.users;
  }

  public getMessages() {
    return this.messages;
  }

  public getCurrentUsers() {
    return this.users.value;
  }

  public send(message: string) {
    this.ws.send(message);
  }

  private onMessage(message: Message) {
    console.log(message);
    switch (message.type) {
      case 'NEW_MESSAGE':
        this.messages.next(message);
        break;
      case 'CONNECT':
        this.users.next([...this.getCurrentUsers(), message.user]);
        break;
      case 'DISCONNECT':
        this.users.next(
          this.getCurrentUsers().filter(user => user.name !== message.user.name)
        );
        break;
    }
  }
}
