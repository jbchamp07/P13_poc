import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client'; // ✅ Import par défaut
import { Client, IMessage } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private stompClient!: Client;
  public messages: any[] = [];

  connect() {
    const socket = new SockJS('http://localhost:8080/chat-websocket');

    this.stompClient = new Client({
      webSocketFactory: () => socket,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to WebSocket');

        this.stompClient.subscribe('/topic/public', (message: IMessage) => {
          const msg = JSON.parse(message.body);
          this.messages.push(msg);
        });
      },
      onStompError: (frame) => {
        console.error('STOMP error:', frame.headers['message']);
      }
    });

    this.stompClient.activate(); // ✅ Pas .connect()
  }

  sendMessage(msg: string, sender: string) {
    if (this.stompClient && this.stompClient.connected) {
      const chatMessage = {
        sender,
        content: msg,
        type: 'CHAT'
      };
      this.stompClient.publish({
        destination: '/app/chat.sendMessage',
        body: JSON.stringify(chatMessage)
      });
    }
  }
  
}
