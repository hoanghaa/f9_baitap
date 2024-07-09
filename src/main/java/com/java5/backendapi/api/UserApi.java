package com.java5.backendapi.api;

import com.java5.backendapi.data.dto.UserDto;
import com.java5.backendapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:8081/")
@Controller
@RequestMapping("/user-api")
@RequiredArgsConstructor
public class UserApi {

    private final UserService userService;

    @GetMapping("/getAllUser")
    public ResponseEntity<?> getAllUser() {
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",userService.getAllUser());
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/postSaveUser")
    public ResponseEntity<?> doPostSaveUser(@RequestBody UserDto user){
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",userService.saveUser(user));
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/deleteUser")
    public ResponseEntity<?> doDeleteUser(@RequestParam int userId){
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",userService.deleteUser(userId));
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }
}
