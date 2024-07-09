package com.java5.backendapi.service;

import com.java5.backendapi.data.dto.UserDto;
import com.java5.backendapi.data.entity.UserE;

import java.util.List;

public interface UserService {
    List<UserE> getAllUser();
    int saveUser(UserDto user);
    int deleteUser(int userId);
}
