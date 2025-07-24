package com.openclassrooms.pocBack.Service;

import com.openclassrooms.pocBack.Model.Login;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    public boolean AdminLogin(Login loginDTO) {
        if((loginDTO.getLogin().equals("admin")) && (loginDTO.getPassword().equals("admin"))){
            return true;
        }else{
            return false;
        }
    }
}
