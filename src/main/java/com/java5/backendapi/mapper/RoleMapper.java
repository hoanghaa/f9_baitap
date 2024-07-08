package com.java5.backendapi.mapper;

import com.java5.backendapi.data.dto.RoleDto;
import com.java5.backendapi.data.entity.RoleE;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface RoleMapper {
    RoleE getRoleByUserId(@Param("userId") int userId);
    List<RoleE> getAllRole();
    int addRole(RoleDto roleDto);
    int deleteRole(@Param("roleId") int roleId);
    int updateRole(RoleDto roleDto);
}
