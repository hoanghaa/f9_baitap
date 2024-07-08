package com.java5.backendapi.service.impl;

import com.java5.backendapi.data.dto.UserDto;
import com.java5.backendapi.data.entity.UserE;
import com.java5.backendapi.mapper.UserMapper;
import com.java5.backendapi.service.RoleService;
import com.java5.backendapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;

    private final RoleService roleService;

    @Override
    public List<UserE> getAllUser() {
        var listUserInfomation = userMapper.getAllUser();
        listUserInfomation.forEach(e->{
            e.setRole(roleService.getRoleMByUserId(e.getUserId()));
        });
        return listUserInfomation;
    }

    @Override
    public int saveUser(UserDto user) {
        if(user.isNewUser()){
            System.out.println("save");
            return userMapper.saveUser(user);
        }else {
            System.out.println("update");
            System.out.println(user.toString());
            return userMapper.updateUser(user);
        }
    }
}
