package com.java5.backendapi.data.entity;

import lombok.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserE {
    private int userId;
    private String userName;
    private int age;
    private String address;
    private String email;
    private String password;
    private RoleE role;
}
