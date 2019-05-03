import { User } from './user.interface';

export interface Message {
  type: 'NEW_MESSAGE' | 'CONNECT' | 'DISCONNECT';
  message?: string;
  date?: Date;
  user: User;
}
