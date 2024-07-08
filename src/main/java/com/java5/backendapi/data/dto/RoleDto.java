package com.java5.backendapi.data.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RoleDto {
    private int roleId;
    private String roleName;
    private String description;
    private String color;
}
