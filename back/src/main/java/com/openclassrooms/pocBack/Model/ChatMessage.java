package com.openclassrooms.pocBack.Model;

import lombok.Data;

@Data
public class ChatMessage {
    private String sender;
    private String content;
    private MessageType type;

    public ChatMessage() {} // constructeur par défaut
    public enum MessageType {
        CHAT, JOIN, LEAVE
    }
}
