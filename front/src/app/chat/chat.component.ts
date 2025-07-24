import { Component } from '@angular/core';
import { ChatService } from '../chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  standalone: true,
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  username: string = 'Client';
  message: string = '';
  messages: any[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupération du paramètre 'role' dans l'URL
    this.route.queryParamMap.subscribe(params => {
      if (params.get('role') === 'admin') {
        this.username = 'Admin';
      }
    });

    this.chatService.connect();

    // Synchronisation des messages reçus avec ceux du service
    this.chatService.messages = this.messages;


    
  }

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.chatService.sendMessage(this.message, this.username);
      this.message = '';
    }
  }
}
