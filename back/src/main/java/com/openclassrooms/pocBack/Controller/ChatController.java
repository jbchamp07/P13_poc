package com.openclassrooms.pocBack.Controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.openclassrooms.pocBack.Model.ChatMessage;
import com.openclassrooms.pocBack.Model.Login;
import com.openclassrooms.pocBack.Service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = "http://localhost:4200")
@Controller
public class ChatController {
    @Autowired
    private ChatService chatService;

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public String sendMessage(@Payload ChatMessage chatMessage) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        return mapper.writeValueAsString(chatMessage);
    }
    @PostMapping("/login")
    @ResponseBody
    public boolean login(@RequestBody Login loginDTO) {
        return chatService.AdminLogin(loginDTO);
    }
}
