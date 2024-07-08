package com.java5.backendapi.service;

import com.java5.backendapi.data.dto.RoleDto;
import com.java5.backendapi.data.entity.RoleE;

import java.util.List;

public interface RoleService {
    RoleE getRoleMByUserId(int userId);
    List<RoleE> getAllRole();
    int postSaveRole(RoleDto roleDto);
    int deleteRole(int roleId);
}
