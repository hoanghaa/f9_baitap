package com.java5.backendapi.mapper;

import com.java5.backendapi.data.dto.UserDto;
import com.java5.backendapi.data.entity.UserE;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Component;

import java.util.List;
@Mapper
public interface UserMapper {
    List<UserE> getAllUser();

    int saveUser(UserDto user);

    int updateUser(UserDto user);

    int deleteUser(int userId);
}
