package com.java5.backendapi.service.impl;

import com.java5.backendapi.data.dto.RoleDto;
import com.java5.backendapi.data.entity.RoleE;
import com.java5.backendapi.mapper.RoleMapper;
import com.java5.backendapi.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class RoleServiceImpl implements RoleService {
    private final RoleMapper roleMapper;

    @Override
    public RoleE getRoleMByUserId(int UserId) {
        return roleMapper.getRoleByUserId(UserId);
    }

    @Override
    public List<RoleE> getAllRole() {
        return roleMapper.getAllRole();
    }

    @Override
    public int postSaveRole(RoleDto roleDto) {
        List<RoleE> listRole = this.getAllRole();
        for (RoleE role : listRole) {
            if (role.getRoleId() == roleDto.getRoleId()){
                return roleMapper.updateRole(roleDto);
            }
        }
        return roleMapper.addRole(roleDto);
    }

    @Override
    public int deleteRole(int roleId){
        return roleMapper.deleteRole(roleId);
    }
}
