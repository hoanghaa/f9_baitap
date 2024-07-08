package com.java5.backendapi.api;

import com.java5.backendapi.data.dto.RoleDto;
import com.java5.backendapi.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:8081/")
@Controller
@RequestMapping("/role-api")
@RequiredArgsConstructor
public class RoleApi {
    private final RoleService roleService;

    @GetMapping("/getAllRole")
    public ResponseEntity<?> doGetAllRole() {
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",roleService.getAllRole());
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

    @PostMapping("/postSaveRole")
    public ResponseEntity<?> doPostSaveRole(@RequestBody RoleDto role) {
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",roleService.postSaveRole(role));
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

    @DeleteMapping("/deleteRole")
    public ResponseEntity<?> doDeleteRole(@RequestParam("roleId") int roleId) {
        Map<String, Object> result = new HashMap();
        try {
            result.put("success",true);
            result.put("message","Call api success");
            result.put("data",roleService.deleteRole(roleId));
        }catch (Exception e){
            result.put("success",false);
            result.put("message","Call api fail");
            result.put("data",null);
            e.printStackTrace();
        }
        return ResponseEntity.ok(result);
    }

}
