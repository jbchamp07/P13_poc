package com.openclassrooms.pocBack.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.openclassrooms.pocBack.Model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public String sendMessage(@Payload ChatMessage chatMessage) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(chatMessage);
    }
}
